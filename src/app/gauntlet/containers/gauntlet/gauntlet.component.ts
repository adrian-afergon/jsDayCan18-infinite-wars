import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../../core/services/socket.service';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  public onSnap() {
    this.socketService.snap();
  }
}
