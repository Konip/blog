import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { userReducer } from './userReducer';

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(rootSaga)