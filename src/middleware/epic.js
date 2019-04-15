import { combineEpics } from 'redux-observable';
import { fetchAddressesEpic } from '../store/addresses/actions';
import { fetchCarsEpic } from '../store/map/actions';

export const rootEpic = combineEpics(
  fetchAddressesEpic,
  fetchCarsEpic,
);