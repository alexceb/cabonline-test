import { 
  DEFAULT_MAP_CONFIG,
  USER_LOCATION_ZOOM_RATE,
} from '../../constants';
import { 
  SET_USER_LOCATION, 
  GET_CARS_FULLFILLED,
} from './actionTypes';

const initialState = {
  mapConfig: DEFAULT_MAP_CONFIG,
  availableCars: [],
}

const map = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return {
        ...state,
        mapConfig: {
          ...state.mapConfig,
          center: {
            lat: action.location.lat,
            lng: action.location.lng,
          },
          zoom: USER_LOCATION_ZOOM_RATE,
        }
      }
    case GET_CARS_FULLFILLED:
      return {
        ...state,
        availableCars: action.data,
      }
    default:
      return state;
  }
}

export default map;
