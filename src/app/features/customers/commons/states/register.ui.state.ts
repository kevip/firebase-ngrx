export interface RegisterUIState {
  loading: boolean;
  successSubmit: boolean;
  submitError: boolean;
}

export const initialRegisterUIState: RegisterUIState = {
  loading: false,
  successSubmit: false,
  submitError: false
};
