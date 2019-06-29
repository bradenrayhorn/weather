import React from "react";
import {WiAlien, WiDaySunny, WiFog} from "weather-icons-react";

class IconMap {

  static getIcon(name) {

    const size = 54;

    switch (name) {
      case 'clear-day':
        return <WiDaySunny size={size}/>;
      case 'fog':
        return <WiFog size={size}/>;
      default:
        return <WiAlien/>
    }
  }

}

export default IconMap;