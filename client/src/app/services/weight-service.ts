import { HttpClient } from '@angular/common/http';
import { computed, inject, OnDestroy, Service, signal } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Weight } from '../interfaces/weight';
import { io, Socket } from 'socket.io-client';
import { AuthResponse } from '../interfaces/auth-response';
import { User } from '../interfaces/user';

@Service()
export class WeightService {
  private http = inject(HttpClient);
  // private socket!: Socket;
  // private socketUrl = 'http://localhost:3000';
  private weightsSignal = signal<Weight[]>([]);
  private userSignal = signal<User | undefined>(undefined);

  weights = this.weightsSignal.asReadonly();
  currentWeight = computed(() =>
    this.weights().length > 0 ? this.weights()[0].weight : undefined,
  );
  startDate = computed(() =>
    this.weights().length > 0
      ? new Date(this.weights()[this.weights().length - 1].recordedDate).toDateString()
      : undefined,
  );
  startWeight = computed(() =>
    this.weights().length > 0 ? this.weights()[this.weights().length - 1].weight : undefined,
  );
  goalWeight = computed(() => (this.user() ? this.user()!.goalWeight : undefined));
  user = this.userSignal.asReadonly();
  lossTarget = computed(() => {
    return this.weights().length > 0 && this.goalWeight()
      ? this.startWeight()! - this.goalWeight()!
      : undefined;
  });

  lostSoFar = computed(() => {
    return this.weights().length > 0 ? this.startWeight()! - this.currentWeight()! : undefined;
  });

  leftToLose = computed(() => {
    return this.weights().length > 0 && this.goalWeight()
      ? this.currentWeight()! - this.goalWeight()!
      : undefined;
  });

  baseUrl: string = 'http://localhost:3000/api';

  // constructor() {
  //   this.initSocketConnection();
  // }

  // getChanges(): Observable<any> {
  //   return new Observable((observer) => {
  //     this.socket.on('documentChanged', (data) => observer.next(data));
  //   });
  // }

  // private initSocketConnection(): void {
  //   this.socket = io(this.socketUrl);

  //   // Listen for real-time creation changes
  //   this.socket.on('documentChanged', (change) => {
  //     if (change.operationType === 'insert') {
  //       this.weightsSignal.set(
  //         [...this.weights(), change.fullDocument].sort(
  //           (a: Weight, b: Weight) =>
  //             new Date(b.recordedDate).getDate() - new Date(a.recordedDate).getDate(),
  //         ),
  //       );
  //     }
  //   });
  // }

  getWeights(): void {
    this.http
      .get<Weight[]>(`${this.baseUrl}/weights`)
      .pipe(
        tap((weights) => {
          weights.sort(
            (a: Weight, b: Weight) =>
              new Date(b.recordedDate).getTime() - new Date(a.recordedDate).getTime(),
          );
          this.weightsSignal.set(weights);
        }),
        catchError((error) => {
          console.error('Failed to load weights', error);
          return of([]);
        }),
      )
      .subscribe();
  }

  addWeight(weight: Weight): void {
    console.log(weight._id);
    if (
      this.weights().some(
        (w) =>
          new Date(w.recordedDate).toDateString() === new Date(weight.recordedDate).toDateString(),
      )
    ) {
      weight._id = this.weights().find(
        (w) =>
          new Date(w.recordedDate).toDateString() === new Date(weight.recordedDate).toDateString(),
      )!._id;
      this.updateWeight(weight);
      this.getWeights();
    } else {
      this.http.post<Weight>(`${this.baseUrl}/weights`, weight).subscribe((value) => {
        console.log('Added Weight: ', value);
        this.getWeights();
      });
    }
  }

  updateWeight(weight: Weight): void {
    this.http.put<Weight>(`${this.baseUrl}/weights/${weight._id}`, weight).subscribe((value) => {
      console.log('Updated Weight: ', value);
      this.getWeights();
    });
  }

  deleteWeight(weightId: string): void {
    this.http.delete(`${this.baseUrl}/weights/${weightId}`).subscribe(() => {
      console.log('Deleted Weight with ID: ', weightId);
      this.getWeights();
    });
  }

  updateGoalWeight(user: User, goalWeight: number) {
    user.goalWeight = goalWeight;
    this.http.put<User>(`${this.baseUrl}/${user._id}`, user).subscribe((value) => {
      console.log('User updated: ', value);
    });
  }

  logIn(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    let formData = {
      email: user.email,
      password: passwd,
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData);
  }

  getUser(userId: string): void {
    this.http
      .get<User>(`${this.baseUrl}/users/${userId}`)
      .pipe(
        tap((user) => {
          console.log('User found: ', user);
          this.userSignal.set(user);
        }),
        catchError((error) => {
          console.error('Failed to load user', error);
          return of(undefined);
        }),
      )
      .subscribe();
  }

  // ngOnDestroy(): void {
  //   if (this.socket) {
  //     this.socket.disconnect();
  //   }
  // }
}
