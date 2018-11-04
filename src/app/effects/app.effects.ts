import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StonesRepository} from '../core/services/stones.repository';
import {Observable, of } from 'rxjs';
import {Action} from '@ngrx/store';
import {GET_STONES, GetStonesFulfilled, GetStonesRejected, SNAP} from '../actions/gauntlet.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Gauntlet} from '../core/model/stones';
import {SocketClient} from '../core/services/socket.client';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private stoneRepository: StonesRepository, private socketClient: SocketClient) {}

  @Effect()
  getStones: Observable<Action> = this.actions$.pipe(
    ofType(GET_STONES),
    switchMap(action => this.stoneRepository.getStones()),
    map((gauntlet: Gauntlet) => new GetStonesFulfilled(gauntlet)),
    catchError( error => of(new GetStonesRejected(error)))
  );
  @Effect({dispatch: false})
  onSnap = this.actions$.pipe(
    ofType(SNAP),
    tap( () => this.socketClient.snap())
  );

}
