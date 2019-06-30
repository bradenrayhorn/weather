import React from "react";
import "../scss/locations.scss";
import Navbar from "../components/Navbar";
import LocationService from "../utils/LocationService";

class Locations extends React.Component {

  state = {
    canGeolocate: false
  };

  componentDidMount() {
    LocationService.canGeoLocate(res => {
      this.setState({
        canGeolocate: res
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar state='back-left'/>
        <div className='status'>
          Can Geolocate: <span style={{color: this.state.canGeolocate ? '#1D9922' : '#DE2323'}}>
          {this.state.canGeolocate ? 'Yes' : 'No'}
        </span>
        </div>
        <div className='locations'>

        </div>
      </div>
    );
  }

}

export default Locations;