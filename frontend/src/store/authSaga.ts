import { all, call, fork, put, take } from 'redux-saga/effects';
import AuthService from '../services/AuthService';
import { loginFailure, loginSuccess, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, registrationFailure, registrationSuccess, REGISTRATION_REQUEST } from './authActionTypes';
import { closePopUp } from './modalActionTypes';
import { CreateUserDto, LoginDto, ResponseLogin, ResponseUser } from './types';


export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}

function* registrationFlow(payload: CreateUserDto) {
    try {
        const user: ResponseUser = yield call(AuthService.registration, payload)
        yield put(registrationSuccess(user))
        yield call(AuthService.saveCookie, user.token)
        yield put(closePopUp())
    } catch (error) {
        console.log(error);
        yield put(registrationFailure(error))
    }
}


function* registrationWatcher() {
    while (true) {
        const { payload } = yield take(REGISTRATION_REQUEST)
        yield fork(registrationFlow, payload)
        // const action: { type: string } = yield take([LOGOUT, LOGIN_FAILURE])
        // if (action.type === LOGOUT) {
        //     // yield cancel(user)
        //     yield call(AuthService.clearCookie)
        // }
    }
}

function* loginFlow(payload: LoginDto) {
    try {
        const user: ResponseLogin = yield call(AuthService.login, payload)
        yield put(loginSuccess(user))
        yield call(AuthService.saveCookie, user.token)
        yield put(closePopUp())
    } catch (error) {
        console.log(error);
        yield put(loginFailure(error))
    }
}

function* loginWatcher() {
    while (true) {
        const { payload } = yield take(LOGIN_REQUEST)
        const user: ResponseLogin = yield fork(loginFlow, payload)
        const action: { type: string } = yield take([LOGOUT, LOGIN_FAILURE])
        if (action.type === LOGOUT) {
            // yield cancel(user)
            yield call(AuthService.clearCookie)
        }
    }
}

export function* authSaga() {
    yield all([
        loginWatcher(),
        registrationWatcher(),
    ])
}
