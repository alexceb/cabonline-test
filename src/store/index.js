import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import addresses from './addresses/reducer';
import map from './map/reducer';

import middleware, { epicMiddleware } from '../middleware/index';
import { rootEpic } from '../middleware/epic';

const composeEnhancers = composeWithDevTools({});

const reducers = combineReducers({
  addresses,
  map,
});

export const store = createStore(
  reducers,
  undefined,
  composeEnhancers(middleware),
);

epicMiddleware.run(rootEpic);
