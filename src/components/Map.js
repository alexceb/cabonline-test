import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../constants';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Marker from './Marker';

import { v4 } from 'node-uuid';

class Map extends Component {

  constructor(props) {
    super();

    this.renderCars = this.renderCars.bind(this);
  }

  renderCars(cars) {
    return (
      cars.map(({ brand, lat, lng }) => (
        <Marker
          key={v4()}
          lat={lat}
          lng={lng}
        >
          <FontAwesomeIcon icon={['fas', 'car']} size="3x" />
        </Marker>
      ))
    )
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '70%', marginLeft: '30%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          zoom={this.props.zoom}
          center={this.props.center}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          >
            <FontAwesomeIcon icon={['fas', 'male']} size="3x" />
          </Marker>

          {this.renderCars(this.props.cars)}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
