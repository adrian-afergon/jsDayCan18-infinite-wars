import {Component, OnDestroy, OnInit} from '@angular/core';
import { SocketClient } from '../../../core/services/socket.client';
import { StonesRepository } from '../../../core/services/stones.repository';
import { StoneModel } from '../../viewmodel/Stone.model';
import { GauntletMapper } from '../../mappers/gauntlet.mapper';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GauntletState} from '../../../reducers/gauntlet.reducer';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit, OnDestroy {
  public stones: StoneModel[];
  public stones$: Observable<GauntletState>;
  public subscription: Subscription;
  constructor(private store: Store<GauntletState>, private socketClient: SocketClient, private stonesRepository: StonesRepository) {
    this.stones = [];
    this.stones$ = store.pipe(select('gauntlet'));
  }

  ngOnInit() {
    // this.subscription = this.stonesRepository.getStones().subscribe(gauntlet => this.stones = GauntletMapper.toViewModel(gauntlet));
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
  public toViewModel(data) {
    console.log('re-render...');
    return GauntletMapper.toViewModel(data);
  }
}
