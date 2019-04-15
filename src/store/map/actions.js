import { switchMap, takeUntil, flatMap, map } from 'rxjs/operators'; 
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { interval } from 'rxjs';
import { 
  SET_USER_LOCATION,
  START_POLLING_CARS,
  STOP_POLLING_CARS,
  GET_CARS_FULLFILLED,
} from './actionTypes';
import { API, POLLING_TIME_INTERVAL } from '../../constants';

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

export const fetchCarsEpic = action$ =>
  action$.pipe(
    ofType(START_POLLING_CARS),
    switchMap(action => interval(POLLING_TIME_INTERVAL).pipe(
      flatMap(() => 
        ajax({ url: `${API}/vehicles?lat=${action.location.lat}&lng=${action.location.lng}`, crossDomain: true })
          .pipe(map(res => getCarsFullfilled(res.response)))  
      ),
      takeUntil(action$.ofType(STOP_POLLING_CARS))
    )),
  )
