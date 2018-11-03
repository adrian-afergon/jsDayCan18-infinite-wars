import { Component, OnInit } from '@angular/core';
import {SocketClient} from '../../services/socket.client';
import { Event } from '../../model/event';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  disconnected = false;

  constructor(private socketService: SocketClient) { }

  ngOnInit() {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();
    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        this.disconnected = true;
        console.log('disconnected');
      });
  }

}
