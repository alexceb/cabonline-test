import { GET_ADDRESSES_FULLFILLED, SELECT_ADDRESS } from './actionTypes';

/*
  AppState = {
    addresses: Address[],
    selectedAddress: Address,
  }
*/
const initialState = {
  searchResult: [],
  selectedAddress: {},
}

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESSES_FULLFILLED:
      return {
        ...state,
        searchResult: action.data,
        selectedAddress: {},
      };
    case SELECT_ADDRESS:
      return { 
        ...state, 
        selectedAddress: action.address,
        searchResult: [],
      };
    default:
      return state;
  }
};

export default addresses;
