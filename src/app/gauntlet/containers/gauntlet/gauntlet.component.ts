import {Component, OnDestroy, OnInit} from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { StonesService } from '../../../core/services/stones.service';
import { StoneModel } from '../../viewmodel/Stone.model';
import { GauntletMapper } from '../../mappers/gauntlet.mapper';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit, OnDestroy {
  public stones: StoneModel[];
  public subscription: Subscription;
  constructor(private socketService: SocketService, private stonesService: StonesService) {
    this.stones = [];
  }

  ngOnInit() {
    this.subscription = this.stonesService.getStones().subscribe(gauntlet => this.stones = GauntletMapper.toViewModel(gauntlet));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  public isGauntletCompleted() {
    return !!this.stones.find(stone => !stone.equipped);
  }
  public onSnap() {
    this.socketService.snap();
  }
  public equipStone(stoneId) {
    this.stones.map( stone => stone.id === stoneId ? stone.equipped = !stone.equipped : stone);
  }
}
