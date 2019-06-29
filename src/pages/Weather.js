import React from "react";
import "../scss/weather.scss";
import axios from "axios";
import LocationService from "../utils/LocationService";
import {getUid} from "../utils/user";
import styled from "@emotion/styled";
import SettingsIcon from "@material-ui/icons/Settings";
import LocationIcon from "@material-ui/icons/NearMe";
import IconMap from "../utils/IconMap";
import WindIcon from "@material-ui/icons/Navigation";

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

class Weather extends React.Component {

  state = {
    location: LocationService.getActiveLocation().name,
    current: {
      icon: '',
      temperature: 0,
      windSpeed: 0,
      windBearing: 0
    }
  };

  componentDidMount() {
    let location = LocationService.getActiveLocation();
    axios
      .post('/weather.php?uid=' + getUid(), {
        lat: location.latitude,
        lon: location.longitude
      })
      .then((response) => {
        let weather = response.data.data;
        let {currently} = weather;
        console.log(weather);
        this.setState({
          current: {
            icon: currently.icon,
            temperature: Math.round(currently.apparentTemperature),
            windSpeed: Math.round(currently.windSpeed || 0),
            windBearing: currently.windBearing || 0,
          }
        });
      })
      .catch((error) => {

      });
  }

  render() {
    let {current} = this.state;

    return (
      <div>
        <div className='navbar'>
          <SettingsIcon/>
          <LocationIcon/>
        </div>
        <div className='dashboard'>
          <Title>{this.state.location}</Title>
          <div className='conditions'>
            <div className='temperature'>
              {IconMap.getIcon(current.icon)}
              <span>{current.temperature}°F</span>
            </div>
            <div className='wind'>
              <WindIcon style={{transform: `rotate(${current.windBearing + 180}deg)`}}/>
              <span>{current.windSpeed}<span className='label'>mph</span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Weather;