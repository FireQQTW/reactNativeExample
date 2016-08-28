import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools';
import reducer from '../reducers'
import Reactotron from 'reactotron-react-native'
import createReactotronEnhancer from 'reactotron-redux'
import createLogger from 'redux-logger'
import rootSaga from '../sagas'

const reactotronEnhancer = createReactotronEnhancer(Reactotron, {})
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      reactotronEnhancer,
      applyMiddleware(thunk, logger, sagaMiddleware),
      devTools({
        name: Platform.OS,
        // hostname: 'localhost',
        // port: 3456,
        realtime: true
      })
    )
  );

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
