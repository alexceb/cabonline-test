import React, { useEffect, useState } from 'react';
import AddressesList from '../containers/AddressesList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {debounce} from 'lodash';

const SearchBox = ({ isShown, onStopSearchingCars, onGetData, selectedAddress }) => {

  const addressInput = React.createRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show && Object.keys(selectedAddress).length) {
      addressInput.current.value = `${selectedAddress.streetName}, ${selectedAddress.city}`;
    }
  })

  const error = () => (
    <div className="error">Address should include just letters</div>
  )

  const validate = (val) => {
    return val.length > 0 &&
          RegExp(/^[a-zA-Z\s]+$/).test(val);
  }

  const handleFormSubmit = (e) => {
    if (validate(addressInput.current.value)) {
      e.preventDefault();
      onGetData(addressInput.current.value);
      addressInput.current.value = '';
      onStopSearchingCars();
    } else {
      setShow(true)
      e.preventDefault();
    }
  }

  const handleInputChange = debounce((e) => {
    if (show) setShow(false);
  }, 400)

  return (
    <div className="search-box">
      <form className="search-form" onSubmit={handleFormSubmit}>
        <div className="search-box__icon">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </div>
        <input 
          ref={addressInput}
          type="text" 
          placeholder="Search address"
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange(e)} />
        { show ? error():null}
      </form>
      { isShown ? 
        <AddressesList /> :
        null 
      }
    </div>
  )
}

export default SearchBox;
