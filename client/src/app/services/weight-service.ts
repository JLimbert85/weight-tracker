import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Weight } from '../interfaces/weight';
import { io, Socket } from 'socket.io-client';

@Service()
export class WeightService {
  private http = inject(HttpClient);
  private socket: Socket = io('http://localhost:3200');

  baseUrl: string = 'http://localhost:3000/api';

  getChanges(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('documentChanged', (data) => observer.next(data));
    });
  }

  getWeights(): Observable<Weight[]> {
    return this.http.get<Weight[]>(this.baseUrl);
  }

  addWeight(weight: Weight): void {
    this.http
      .post<Weight>(this.baseUrl, weight)
      .subscribe((value) => console.log('Added Weight: ', value));
  }
}
