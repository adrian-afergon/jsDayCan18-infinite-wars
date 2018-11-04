import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StonesRepository} from '../core/services/stones.repository';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GET_STONES, GetStonesFulfilled, GetStonesRejected} from '../actions/gauntlet.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Gauntlet} from '../core/model/stones';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private stoneRepository: StonesRepository) {}

  @Effect()
  getStones: Observable<Action> = this.actions$.pipe(
    ofType(GET_STONES),
    switchMap(action => this.stoneRepository.getStones()),
    map((gauntlet: Gauntlet) => new GetStonesFulfilled(gauntlet)),
    catchError( error => of(new GetStonesRejected(error)))
  );
}
