import { CreateUserDto, LoginDto } from "./types"

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
export const LOGOUT = 'LOGOUT'

export function registration(payload: CreateUserDto) {
    return {
      type: REGISTRATION_REQUEST,
      payload
    };
  }

  export function loginRequest(payload: LoginDto) {
    return {
      type: LOGIN_REQUEST,
      payload
    };
  }

  export const loginSuccess = (user:any) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  export const loginFailure = (error:any) => ({
    type: REGISTRATION_FAILURE,
    payload: error,
  })

  export const logout = () => ({
    type: LOGOUT
  })