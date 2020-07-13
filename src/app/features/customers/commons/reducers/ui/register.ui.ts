import { RegisterUIActions,
        SUCCESS_SUBMIT,
        STOP_SUCCESS_SUBMIT,
        SUBMIT_ERROR,
        STOP_SUBMIT_ERROR,
        START_LOADING,
        STOP_LOADING} from '../../actions/register.ui.actions';
import { initialRegisterUIState, RegisterUIState } from '../../states/register.ui.state';

// tslint:disable-next-line: typedef
export function registerUIReducer(state = initialRegisterUIState, action: RegisterUIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_SUBMIT:
      return {
        ...state,
        successSubmit: true
      };
    case STOP_SUCCESS_SUBMIT:
      return {
        ...state,
        successSubmit: false
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        submitError: true
      };
    case STOP_SUBMIT_ERROR:
      return {
        ...state,
        submitError: false
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default: {
      return state;
    }
  }
}

export const getLoading = (state: RegisterUIState) => state.loading;
export const getSuccessSubmit = (state: RegisterUIState) => state.successSubmit;
export const getSubmitError = (state: RegisterUIState) => state.submitError;
