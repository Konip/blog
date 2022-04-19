import { all, call, cancel, fork, put, SimpleEffect, take, TakeEffect } from 'redux-saga/effects';
import AuthService from '../services/AuthService';
import { loginFailure, loginSuccess, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, REGISTRATION_REQUEST } from './authActionTypes';
import { closePopUp } from './modalActionTypes';
import { ResponseLogin, ResponseUser } from './types';


// function* registration({ payload }: any) {
//     try {
//         console.log(payload);
//         const data = UserApi.register(payload)

//     } catch (error) {

//     }
// }

// function* login({ payload }: any) {
//     try {
//         // const data = UserApi.login(payload)
//         const data = call(UserApi.login, payload)
//         console.log(data);

//         // yield put(loginSuccess(data))
//     } catch (error) {

//     }
// }

// function* watchLogin() {
//     yield takeEvery
// }

// function* watchRegistration() {
//     yield takeLatest(REGISTRATION_REQUEST, registration);
// }

function* authorize(email: string, password: string) {
    try {
        const user: ResponseLogin = yield call(AuthService.login, { email, password })
        yield put(loginSuccess(user))
        yield call(AuthService.saveCookie, user.token)
        yield put(closePopUp())
    } catch (error) {
        console.log(error);
        yield put(loginFailure(error))
    }
}

function* loginFlow() {
    while (true) {
        const { payload } = yield take(LOGIN_REQUEST)
        const user: ResponseLogin = yield fork(authorize, payload.email, payload.password)
        const action: { type: string } = yield take([LOGOUT, LOGIN_FAILURE])
        if (action.type === LOGOUT) {
            // yield cancel(user)
            yield call(AuthService.clearCookie)
        }
    }
}

export function* authSaga() {
    yield all([
        loginFlow()
    ])
}
