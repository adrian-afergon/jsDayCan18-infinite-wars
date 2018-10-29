import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { Stone } from '../../stones';
import { StonesService } from '../../../core/services/stones.service';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {
  public stones: Stone[];
  constructor(private socketService: SocketService, private stonesService: StonesService) { }

  ngOnInit() {
    this.stonesService.getStones().subscribe(gauntlet => this.stones = Object.values(gauntlet));
  }

  public onSnap() {
    this.socketService.snap();
  }
}
