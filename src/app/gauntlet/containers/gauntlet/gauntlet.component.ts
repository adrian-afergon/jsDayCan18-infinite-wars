import {Component, OnDestroy, OnInit} from '@angular/core';
import { SocketClient } from '../../../core/services/socket.client';
import { StonesRepository } from '../../../core/services/stones.repository';
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
  constructor(private socketClient: SocketClient, private stonesRepository: StonesRepository) {
    this.stones = [];
  }

  ngOnInit() {
    this.subscription = this.stonesRepository.getStones().subscribe(gauntlet => this.stones = GauntletMapper.toViewModel(gauntlet));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  public isGauntletCompleted() {
    return !!this.stones.find(stone => !stone.equipped);
  }
  public onSnap() {
    this.socketClient.snap();
  }
  public equipStone(stoneId) {
    this.stones.map( stone => stone.id === stoneId ? stone.equipped = !stone.equipped : stone);
  }
}
