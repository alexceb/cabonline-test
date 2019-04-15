import { map, takeUntil, switchMap  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { timer, from } from 'rxjs';
import { ofType } from 'redux-observable';
import { 
  SET_USER_LOCATION,
  START_POLLING_CARS,
  STOP_POLLING_CARS,
  GET_CARS_FULLFILLED,
} from './actionTypes';
import { API } from '../../constants';

export const setUserLocation = (location) => (
  {
    type: SET_USER_LOCATION,
    location,
  }
)

export const getAvailableCars = (location) => (
  {
    type: START_POLLING_CARS,
    location,
  }
)

export const getCarsFullfilled = (data) => (
  {
    type: GET_CARS_FULLFILLED,
    data,
  }
)

export const stopSearchingCars = () => ({ type: STOP_POLLING_CARS });

export const fetchCarsEpic = action$ => action$.pipe(
  ofType(START_POLLING_CARS),
  switchMap(action => {
    return timer(0, 3000).pipe(
      takeUntil(action$.pipe(
        ofType(STOP_POLLING_CARS)
      )), 
      switchMap(() => from(ajax.getJSON(`${API}/vehicles?lat=${action.location.lat}&lng=${action.location.lng}`)),
        map(response => getCarsFullfilled(response))
      )
    )
  })
)
