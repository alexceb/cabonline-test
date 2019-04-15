import React from 'react';

import SearchBox from './SearchBox';
import Map from '../containers/Map';

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { hasAddresses } = this.props;
    return (
      <div className="app">
        <SearchBox 
          isShown={hasAddresses}
          onStopSearchingCars={this.props.onStopSearchingCars} 
          onGetData={this.props.onGetData}
          selectedAddress={this.props.selectedAddress} />
        <Map />
      </div>
    )
  }
  
}

export default App;
