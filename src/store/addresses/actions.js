import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { 
  GET_ADDRESSES, 
  SELECT_ADDRESS,
  GET_ADDRESSES_FULLFILLED,
} from './actionTypes';
import { API } from '../../constants';

export const getAddressesFullfilled = (data) => (
  {
    type: GET_ADDRESSES_FULLFILLED,
    data,
  }
)

export const getAddressesFromSearch = query => ({ type: GET_ADDRESSES, query});

export const fetchAddressesEpic = action$ => action$.pipe(
  ofType(GET_ADDRESSES),
  mergeMap(action => 
    ajax.getJSON(`${API}/addresses?q=${action.query}`).pipe(
      map(response => getAddressesFullfilled(response))
    )
  )
);

export const handleSelectAddress = (address) =>(
  {
    type: SELECT_ADDRESS,
    address,
  }
)
