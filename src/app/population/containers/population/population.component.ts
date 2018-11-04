import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketClient} from '../../../core/services/socket.client';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GauntletState} from '../../../core/infrastructure/reducers/gauntlet.reducer';
import {PopulationState} from '../../infrastructure/reducers/population.reducer';
import {PopulationSelectors} from '../../infrastructure/selectors/population.selectors';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {
  people$: Observable<number>;
  constructor(private store: Store<PopulationState>) {
  }

  ngOnInit() {
    this.people$ = this.store.pipe(select(PopulationSelectors.getConnectedPeople));
    // this.subscription = this.socketClient.onPopulation().subscribe( population => this.people = population);
  }

}
