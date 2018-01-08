import * as fromCards from './cards';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../../environments/environment';
import * as fromRoot from './root';

export interface CardsState {
    cards: fromCards.State;
}

export interface State extends fromRoot.State {
  cards: CardsState;
}

export const reducers = {
    cards: fromCards.reducer
}

/**
 * Cards Reducers
 */
export const getCardsState = createFeatureSelector<CardsState>('cards');
export const getCards = createSelector(
    getCardsState,
    state => state.cards.cards
);  
