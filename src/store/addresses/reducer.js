import { GET_ADDRESSES_FULLFILLED, SELECT_ADDRESS } from './actionTypes';

/*
  AppState = {
    addresses: Address[],
    selectedAddress: Address,
  }
*/
const initialState = {
  searchResult: [],
}

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESSES_FULLFILLED:
      return {
        ...state,
        searchResult: action.data,
      };
    case SELECT_ADDRESS:
      return { 
        ...state, 
        selectedAddress: action.address,
      };
    default:
      return state;
  }
};

export default addresses;
