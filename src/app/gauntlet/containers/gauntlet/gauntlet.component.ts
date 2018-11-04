import {Component, OnInit} from '@angular/core';
import { SocketClient } from '../../../core/services/socket.client';
import { StonesRepository } from '../../../core/services/stones.repository';
import { StoneModel } from '../../viewmodel/Stone.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GauntletState} from '../../../reducers/gauntlet.reducer';
import {GauntletSelectors} from '../../../selectors/gauntlet.selectors';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {
  public stones: StoneModel[];
  public stones$: Observable<Array<StoneModel>>;
  public isGauntletCompleted$: Observable<boolean>;
  constructor(private store: Store<GauntletState>, private socketClient: SocketClient, private stonesRepository: StonesRepository) {
    this.stones = [];
    this.stones$ = store.pipe(select(GauntletSelectors.getGauntletAsViewModel));
    this.isGauntletCompleted$ = store.pipe(select(GauntletSelectors.isGauntletCompleted));
  }

  ngOnInit() {
    // this.subscription = this.stonesRepository.getStones().subscribe(gauntlet => this.stones = GauntletMapper.toViewModel(gauntlet));
  }

  public onSnap() {
    this.socketClient.snap();
  }
  public equipStone(stoneId) {
    this.stones.map( stone => stone.id === stoneId ? stone.equipped = !stone.equipped : stone);
  }
}
