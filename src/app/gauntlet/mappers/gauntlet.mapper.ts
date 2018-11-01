import {Gauntlet} from '../../core/model/stones';
import {StoneModel} from '../viewmodel/Stone.model';

export class GauntletMapper {
   static toViewModel = (gauntlet: Gauntlet): StoneModel[] => Object.keys(gauntlet).map(key => ({id: key, ...gauntlet[key]}));
}
