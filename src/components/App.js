import React from 'react';
import { DEFAULT_MAP_CONFIG } from '../constants';

import AddressesList from '../containers/AddressesList';
import Map from '../containers/Map';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      mapConfig: DEFAULT_MAP_CONFIG,
    }

    this.addressInput = React.createRef();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);
  }

  componentWillMount() {
    this.setUserLocation();
  }

  setUserLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.props.onSetUserLocation({ lat: coords.latitude, lng: coords.longitude });
        // this.props.onGetAvailableCars({ lat: coords.latitude, lng: coords.longitude });
      })
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onGetData(this.addressInput.current.value);
    this.addressInput.current.value = '';
  }

  render() {
    const { hasAddresses } = this.props;
    return (
      <div className="app">
        <form className="search-form" onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input ref={this.addressInput} type="text" className="validate" />
          </div>
          { hasAddresses ? <AddressesList /> : null }
        </form>
  
        <Map />
      </div>
    )
  }
  
}

export default App;
