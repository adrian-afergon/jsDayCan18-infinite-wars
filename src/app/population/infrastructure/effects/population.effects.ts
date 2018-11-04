import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SocketClient} from '../../../core/services/socket.client';
import {GET_POPULATION, GetPopulationSuccess} from '../actions/populations.actions';
import {switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class PopulationEffects {
  constructor(private actions$: Actions, private socketClient: SocketClient) {}

  @Effect({dispatch: false})
  onSnap = this.actions$.pipe(
    ofType(GET_POPULATION),
    tap( () => this.socketClient.snap())
  );

  @Effect()
  updatePopulation$: Observable<Action> =
    this.socketClient.onPopulation().pipe(
      switchMap(population => of(new GetPopulationSuccess(population))
      ));

}
