import { Action } from '@ngrx/store';

export const START_LOADING = '[Customer] start loading';
export const STOP_LOADING = '[Customer] stop loading';
export const SUCCESS_SUBMIT = '[Customer] success submit';
export const STOP_SUCCESS_SUBMIT = '[Customer] stop success submit';
export const SUBMIT_ERROR = '[Customer] submit error';
export const STOP_SUBMIT_ERROR = '[Customer] stop submit error';

export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

export class SuccessSubmit implements Action {
  readonly type = SUCCESS_SUBMIT;
}

export class StopSuccessSubmit implements Action {
  readonly type = STOP_SUCCESS_SUBMIT;
}

export class SubmitError implements Action {
  readonly type = SUBMIT_ERROR;
}

export class StopSubmitError implements Action {
  readonly type = STOP_SUBMIT_ERROR;
}

export type RegisterUIActions = StartLoading | StopLoading | SuccessSubmit | StopSuccessSubmit | SubmitError | StopSubmitError;
