import AddressesList from '../components/AddressesList';
import { connect } from 'react-redux';
import { getAvailableCars } from '../store/map/actions';

const mapStateToProps = ({ addresses }) => {
  return {
    addresses: addresses.searchResult,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartCarsSearch: (location) => dispatch(getAvailableCars(location)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressesList);