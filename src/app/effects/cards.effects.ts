import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {CardService} from '../services/card.service';
import { of } from 'rxjs/observable/of';

import * as Cards from '../actions/cards';

import {exhaustMap, map, mergeMap, catchError} from 'rxjs/operators';

@Injectable()
export class CardsEffects {
    @Effect()
    loadCards$ = this.actions$
        .ofType(Cards.LOAD).pipe(
            mergeMap(action => {
                return this.cardService.getCardsList().pipe(
                map(res => new Cards.LoadSuccess(res)),
                catchError(error => of(new Cards.ServerFailure(error))));
            })
        );

    @Effect({dispatch: false})
    addCards$ = this.actions$
        .ofType(Cards.ADD).pipe(
            map((action: Cards.Add) => action.payload),
            exhaustMap(payload => {
              this.cardService.createCard(payload);
              return of(null);
            })
        );

    @Effect({dispatch: false})
    serverFailure$ = this.actions$
        .ofType(Cards.SERVER_FAILURE).pipe(
        map((action: Cards.ServerFailure) => action.payload),
        exhaustMap(errors => {
            console.log('Server error happened:', errors);
            return of(null);
        }));

    constructor(private actions$: Actions, private cardService: CardService) {
    }
}
