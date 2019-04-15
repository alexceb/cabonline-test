import Map from '../components/Map';
import { connect } from 'react-redux';

import { setUserLocation } from '../store/map/actions';

export function mapStateToProps({ map }) {
  return {
    zoom: map.mapConfig.zoom,
    center: map.mapConfig.center,
    cars: map.availableCars,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSetUserLocation: (location) => dispatch(setUserLocation(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
