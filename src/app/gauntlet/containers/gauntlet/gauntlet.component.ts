import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../../core/services/socket.service';
import {gauntlet} from '../../stones';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {

  public stones = Object.values(gauntlet);
  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  public onSnap() {
    this.socketService.snap();
  }
}
