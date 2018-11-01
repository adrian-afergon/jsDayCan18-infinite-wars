import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { StonesService } from '../../../core/services/stones.service';
import {StoneModel} from '../../viewmodel/Stone.model';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {
  public stones: StoneModel[];
  constructor(private socketService: SocketService, private stonesService: StonesService) { }

  ngOnInit() {
    this.stonesService.getStones().subscribe(gauntlet => this.stones = Object.keys(gauntlet).map(key => ({key, ...gauntlet[key]})));
  }

  public onSnap() {
    this.socketService.snap();
  }
  public equipStone(event) {
    console.log(event);
  }
}
