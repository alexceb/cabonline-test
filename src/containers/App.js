import { connect } from 'react-redux';

import App from '../components/App';

import { getAddressesFromSearch } from '../store/addresses/actions';
import { setUserLocation } from '../store/map/actions';

export function mapStateToProps({ addresses, map }) {
  return {
    addresses: addresses.searchResult,
    hasAddresses: addresses.searchResult.length > 0,
    mapConfig: map.mapConfig,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onGetData: (query) => dispatch(getAddressesFromSearch(query)),
    onSetUserLocation: (location) => dispatch(setUserLocation(location)),
    // onGetAvailableCars: (location) => dispatch(getCarsFromApi(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
