import { connect } from 'react-redux';

import App from '../components/App';

import { getAddressesFromSearch } from '../store/addresses/actions';
import { stopSearchingCars } from '../store/map/actions';

export function mapStateToProps({ addresses, map }) {
  return {
    addresses: addresses.searchResult,
    hasAddresses: addresses.searchResult.length > 0,
    mapConfig: map.mapConfig,
    selectedAddress: addresses.selectedAddress,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onGetData: (query) => dispatch(getAddressesFromSearch(query)),
    onStopSearchingCars: () => dispatch(stopSearchingCars()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
