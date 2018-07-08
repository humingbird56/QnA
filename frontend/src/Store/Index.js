import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const tes = [thunk]
if ( process.env.NODE_ENV === 'development'){
  tes.push(logger);
}

const middleware = applyMiddleware(...tes)
const store = createStore(middleware, applyMiddleware())

export default store