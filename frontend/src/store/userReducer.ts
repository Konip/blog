import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./authActionTypes"

export interface userState {
  auth: boolean
  fullName: string
  email: string
  isLoginPending: boolean
}

const initialState: userState = {
  auth: false,
  fullName: '',
  email: '',
  isLoginPending: false
}

export function userReducer(state = initialState, { type, payload }: any): userState {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoginPending: true
      }
    }
    case LOGIN_SUCCESS: {
      const { fullName, email } = payload
      return {
        ...state,
        auth: true,
        fullName,
        email,
        isLoginPending: false
      }
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
        fullName: '',
        email: '',
      }
    }

    default: return state
  }
}