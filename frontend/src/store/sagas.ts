import { takeEvery } from 'redux-saga/effects';
import { REGISTRATION } from './actions';

function* registration() {
    try {

    } catch (error) {

    }
}


export function* saga() {
    yield takeEvery(REGISTRATION, registration)
}