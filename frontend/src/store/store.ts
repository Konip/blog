import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { modalReducer } from './modalReducer';
import { postReducer } from './postReducer';
import { authSaga } from './authSaga';
import { userReducer } from './userReducer';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware()

function* rootSaga(){
    yield all([
        authSaga()
    ])
}

export const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    post: postReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga)