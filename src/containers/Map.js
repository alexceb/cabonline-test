import Map from '../components/Map';
import { connect } from 'react-redux';

export function mapStateToProps({ map }) {
  return {
    zoom: map.mapConfig.zoom,
    center: map.mapConfig.center,
    cars: map.availableCars,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps)(Map);
