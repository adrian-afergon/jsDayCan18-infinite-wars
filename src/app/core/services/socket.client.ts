import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { environment } from '../../../environments/environment';
import * as socketIo from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketClient {

  private socket;

  constructor() { }

  public initSocket(): void {
    this.socket = socketIo(`${environment.end_point.protocol}://${environment.end_point.hostname}`);
  }

  public snap(): void {
    this.socket.emit(Event.SNAP);
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

  public onPopulation(): Observable<number> {
    return new Observable<number>(observer => {
      this.socket.on('population', (data: number) => observer.next(data));
    });
  }

}
