import AddressesList from '../components/AddressesList';
import { connect } from 'react-redux';
import { getAvailableCars, setUserLocation } from '../store/map/actions';
import { handleSelectAddress } from '../store/addresses/actions';

const mapStateToProps = ({ addresses }) => {
  return {
    addresses: addresses.searchResult,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartCarsSearch: (location) => dispatch(getAvailableCars(location)),
    onSetUserLocation: (location) => dispatch(setUserLocation(location)),
    onSelectAddress: (address) => dispatch(handleSelectAddress(address)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressesList);