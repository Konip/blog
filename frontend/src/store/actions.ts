const SAVE_USER_ALBUMS = 'SAVE_USER_ALBUMS'
import { call } from 'redux-saga/effects';

export function* login() {
    const data = yield call(UserApi):
    yield put({
        type: SAVE_USER_ALBUMS,
        payload: { data }
    })
}