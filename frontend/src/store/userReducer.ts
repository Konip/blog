import { REGISTRATION } from "./actions";

const initialState = {
  auth: false,
  fullName: '',
  email: '',
};

export function userReducer(state = initialState, { type, data }: any) {
  switch (type) {
    case REGISTRATION: {
      return {
        ...state,
        fullName: 'Som',
        email: 'Som',
      }
    }
    default: return state
  }
}