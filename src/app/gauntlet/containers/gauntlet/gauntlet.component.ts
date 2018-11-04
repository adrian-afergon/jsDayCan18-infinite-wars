import {Component, OnInit} from '@angular/core';
import { StoneModel } from '../../viewmodel/Stone.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GauntletState} from '../../../reducers/gauntlet.reducer';
import {GauntletSelectors} from '../../../selectors/gauntlet.selectors';
import {Equip, GetStones, Snap} from '../../../actions/gauntlet.actions';

@Component({
  selector: 'app-gauntlet',
  templateUrl: './gauntlet.component.html',
  styleUrls: ['./gauntlet.component.scss']
})
export class GauntletComponent implements OnInit {
  public stones$: Observable<Array<StoneModel>>;
  public isGauntletCompleted$: Observable<boolean>;
  constructor(private store: Store<GauntletState>) {
    this.stones$ = store.pipe(select(GauntletSelectors.getGauntletAsViewModel));
    this.isGauntletCompleted$ = store.pipe(select(GauntletSelectors.isGauntletCompleted));
  }

  ngOnInit() {
    this.store.dispatch(new GetStones());
  }

  public onSnap() {
    this.store.dispatch(new Snap());
  }
  public equipStone(stoneId) {
    this.store.dispatch(new Equip(stoneId));
  }
}
