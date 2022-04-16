import { take } from 'redux-saga/effects';
import { REGISTRATION_REQUEST } from './actions';

function* registration(dto: any) {
    try {
        console.log(dto);

        // const data =  UserApi.register(dto)
        // const data = call(UserApi.register(),dto)
    } catch (error) {

    }
}

function* registrationFlow() {
    while (true) {
        const { payload } = yield take(REGISTRATION_REQUEST)
        console.log(payload);
        
    }
}


export function* rootSaga() {
    // yield takeEvery(REGISTRATION, registration)
    yield registrationFlow()
}