import React from 'react';

const AddressesList = ({ addresses, onStartCarsSearch }) => {
  return (
    <div className="addresses-list">
      <ul className="collection">
        {addresses.map(address => (
          <a 
            key={address.id} 
            href="#!" 
            className="collection-item"
            onClick={(e) => {
              e.preventDefault();
              onStartCarsSearch({ lat: address.latitude, lng: address.longitude });
            }}
          >
            Street: {address.streetName}, 
            latitude: {address.latitude},
            longitude: {address.longitude}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default AddressesList;
