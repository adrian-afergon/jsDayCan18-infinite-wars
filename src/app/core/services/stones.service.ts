import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Gauntlet, Stone} from '../model/stones';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StonesService {

  constructor(private http: HttpClient) { }

  getStones(): Observable<Gauntlet> {
    console.log('hi', `${environment.end_point.protocol}://${environment.end_point.hostname}/stones`
    );
    return this.http.get( `${environment.end_point.protocol}://${environment.end_point.hostname}/stones`).pipe(
      map(result => {
        console.log(result);
        return result;
      }),
      map((stones: Stone[]) => stones.reduce((sum, stone: any) => ({
        ...sum, [stone.id]: {
          equipped: false,
          action: stone.action,
          image: stone.image,
          name: stone.name,
          description: stone.description
        }
      }), {} as Gauntlet))
    );
    // const gauntlet: Gauntlet = stones.reduce((sum, stone: any) => ({
    //     ...sum, [stone.id]: {
    //       equipped: false,
    //       action: stone.action,
    //       image: stone.image,
    //       name: stone.name,
    //       description: stone.description
    //     }
    // }), {} as Gauntlet);
    // return of(gauntlet);
  }
}
