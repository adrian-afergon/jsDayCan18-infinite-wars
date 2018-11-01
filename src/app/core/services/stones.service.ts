import { Injectable } from '@angular/core';
import {stones} from './stones';
import { Observable, of } from 'rxjs';
import { Gauntlet } from '../model/stones';

@Injectable({
  providedIn: 'root'
})
export class StonesService {

  constructor() { }

  getStones(): Observable<Gauntlet> {
    const gauntlet: Gauntlet = stones.reduce((sum, stone: any) => ({
        ...sum, [stone.id]: {
          equipped: false,
          action: stone.action,
          image: stone.image,
          name: stone.name,
          description: stone.description
        }
    }), {} as Gauntlet);
    return of(gauntlet);
  }
}
