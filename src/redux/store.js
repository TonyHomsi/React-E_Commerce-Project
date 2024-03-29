import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMidadleware from 'redux-saga'

// import {onFetchCollectionsStart} from './shop/shop.sagas'

import rootReducer from './root-reducer'
import rootSaga from './root.saga'

const sagaMiddleware = createSagaMidadleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares) )

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export {
    store,
    persistor}
