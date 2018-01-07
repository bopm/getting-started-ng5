import * as fromCards from './cards';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../../environments/environment';

export interface State {
    cards: fromCards.State;
}

export const reducers: ActionReducerMap<State> = {
    cards: fromCards.reducer
}

export function logger(reducer: ActionReducer<State>): any {
    // default, no options
    return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Cards Reducers
 */
export const getCardsState = createFeatureSelector<fromCards.State>('cards');
export const getCards = createSelector(
    getCardsState,
    state => state.cards
);  
