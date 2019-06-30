import React from "react";
import {
  WiAlien,
  WiCloud,
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiNightAltCloudy,
  WiNightClear,
  WiRain,
  WiRaindrops,
  WiSleet,
  WiSnow,
  WiStrongWind
} from "weather-icons-react";

class IconMap {

  static getIcon(name, size = 54, props = {}) {

    switch (name) {
      case 'clear-day':
        return <WiDaySunny size={size} {...props}/>;
      case 'clear-night':
        return <WiNightClear size={size} {...props}/>;
      case 'rain':
        return <WiRain size={size}{...props}/>;
      case 'snow':
        return <WiSnow size={size}{...props}/>;
      case 'sleet':
        return <WiSleet size={size}{...props}/>;
      case 'wind':
        return <WiStrongWind size={size}{...props}/>;
      case 'fog':
        return <WiFog size={size}{...props}/>;
      case 'cloudy':
        return <WiCloud size={size}{...props}/>;
      case 'partly-cloudy-day':
        return <WiDayCloudy size={size}{...props}/>;
      case 'partly-cloudy-night':
        return <WiNightAltCloudy size={size}{...props}/>;
      default:
        return <WiAlien{...props}/>
    }
  }

  static getPrecipIcon(name, size = 36) {
    switch (name) {
      case 'rain':
        return <WiRaindrops size={size}/>;
      case 'snow':
        return <WiSnow size={size}/>;
      case 'sleet':
        return <WiSleet size={size}/>;
      default:
        return <WiAlien/>
    }
  }

}

export default IconMap;