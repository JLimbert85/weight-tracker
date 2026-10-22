import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Weight } from '../interfaces/weight';
import { User } from '../interfaces/user';
import { AuthenticationService } from './authentication-service';
import { environment } from '../../environments/environment';

@Service()
export class WeightService {
  private http = inject(HttpClient);
  private weightsSignal = signal<Weight[]>([]);
  private userSignal = signal<User | undefined>(undefined);
  private authService = inject(AuthenticationService);

  // Retrieves the current user from the authentication service and updates the user signal.
  // This method is called internally to keep the user signal in sync with the authentication service.
  private updateUser(): void {
    const userId = this.authService.getCurrentUserId();
    this.getUser(userId);
  }

  weights = this.weightsSignal.asReadonly();
  user = this.userSignal.asReadonly();

  // Computed property representing the current weight of the user.
  currentWeight = computed(() =>
    this.weights().length > 0 ? this.weights()[0].weight : undefined,
  );
  // Computed property representing the start date of the user's weight tracking.
  startDate = computed(() =>
    this.weights().length > 0
      ? new Date(this.weights()[this.weights().length - 1].recordedDate).toDateString()
      : undefined,
  );
  // Computed property representing the start weight of the user's weight tracking.
  startWeight = computed(() =>
    this.weights().length > 0 ? this.weights()[this.weights().length - 1].weight : undefined,
  );
  // Computed property representing the goal weight of the user.
  goalWeight = computed(() => (this.user() ? this.user()!.goalWeight : undefined));
  // Computed property representing the height of the user in inches.
  heightInInches = computed(() => (this.user() ? this.user()!.heightInInches : undefined));
  // Computed property representing the Body Mass Index (BMI) of the user.
  BMI = computed(() => {
    if (this.heightInInches() === undefined || this.currentWeight() === undefined) {
      return undefined;
    } else {
      return (this.currentWeight()! / Math.pow(this.heightInInches()!, 2)) * 703;
    }
  });
  // Computed property representing the total weight loss target for the user.
  lossTarget = computed(() => {
    return this.weights().length > 0 && this.goalWeight()
      ? this.startWeight()! - this.goalWeight()!
      : undefined;
  });

  // Computed property representing the total weight lost by the user so far.
  lostSoFar = computed(() => {
    return this.weights().length > 0 ? this.startWeight()! - this.currentWeight()! : undefined;
  });

  // Computed property representing the remaining weight the user needs to lose to reach their goal.
  leftToLose = computed(() => {
    return this.weights().length > 0 && this.goalWeight()
      ? this.currentWeight()! - this.goalWeight()!
      : undefined;
  });

  baseUrl: string = environment.apiUrl;

  // Fetches the weights from the server and updates the local state.
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

  // Adds a new weight to the server and updates the local state.
  addWeight(weight: Weight): void {
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
        this.getWeights();
      });
    }
  }

  // Updates an existing weight on the server and refreshes the local state.
  updateWeight(weight: Weight): void {
    this.http.put<Weight>(`${this.baseUrl}/weights/${weight._id}`, weight).subscribe((value) => {
      this.getWeights();
    });
  }

  // Deletes a weight from the server and refreshes the local state.
  deleteWeight(weightId: string): void {
    this.http.delete(`${this.baseUrl}/weights/${weightId}`).subscribe(() => {
      this.getWeights();
    });
  }

  // Updates the goal weight of a user on the server and refreshes the local state.
  updateGoalWeight(user: User, goalWeight: number) {
    const updatedUser = { ...user, goalWeight: goalWeight };
    this.http.put<User>(`${this.baseUrl}/users/${user._id}`, updatedUser).subscribe((value) => {
      this.getUser(user._id);
    });
  }

  // Updates the height of a user on the server and refreshes the local state.
  updateHeight(user: User, heightInInches: number) {
    const updatedUser = { ...user, heightInInches: heightInInches };
    this.http.put<User>(`${this.baseUrl}/users/${user._id}`, updatedUser).subscribe((value) => {
      this.getUser(user._id);
    });
  }

  // Fetches a user from the server and updates the local state.
  getUser(userId: string): void {
    this.http
      .get<User>(`${this.baseUrl}/users/${userId}`)
      .pipe(
        tap((user) => {
          this.userSignal.set(user);
        }),
        catchError((error) => {
          console.error('Failed to load user', error);
          this.authService.logout();
          return of(undefined);
        }),
      )
      .subscribe();
  }
}
