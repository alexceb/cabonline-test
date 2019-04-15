import React from 'react';

import { ICON_TYPES } from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddressesList = ({ 
  addresses, 
  onStartCarsSearch,
  onSetUserLocation,
  onSelectAddress,
}) => {

  const addressInfo = (address) => {
    const info = `${address.streetName}, ${address.city}, ${address.countryCode}`;
    return <span>{info}</span>
  }
  

  const renderAddressesList = (addresses) => {
    const getAddressTypeIcon = (address) => {
      return ICON_TYPES[address.type].split(' ');
    }

    return (
      addresses.map(address => (
        <li key={address.id} className="addresses-list__item">
          <div className="addresses-list__icon">
            <FontAwesomeIcon icon={getAddressTypeIcon(address)} />
          </div>
          <a
            href="#!" 
            className="collection-item"
            onClick={(e) => {
              e.preventDefault();
              onStartCarsSearch({ lat: address.latitude, lng: address.longitude });
              onSetUserLocation({ lat: address.latitude, lng: address.longitude });
              onSelectAddress(address);
            }}
          >
            {addressInfo(address)}
          </a>
        </li>
      ))
    )
  }

  return (
    <div className="addresses-list">
      <ul className="addresses-list__list">
        {renderAddressesList(addresses)}
      </ul>
    </div>
  )
}

export default AddressesList;
