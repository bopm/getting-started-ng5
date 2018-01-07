import { Action } from '@ngrx/store';

export const ADD = '[Cards] Add';

export const REMOVE = '[Cards] Remove';

export const LOAD = '[Cards] Load';

export const LOAD_SUCCESS = '[Cards] Load Success';

export const SERVER_FAILURE = '[Cards] Server failure';

export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: any) {}
}

export class Remove implements Action {
    readonly type = REMOVE;

    constructor(public payload: any) {}
}

export class Load implements Action {
    readonly type = LOAD;
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: any) {}
}

export class ServerFailure implements Action {
    readonly type = SERVER_FAILURE;

    constructor(public payload: any) {}
}

export type Actions
  = Add
  | Remove
  | Load
  | LoadSuccess
  | ServerFailure;