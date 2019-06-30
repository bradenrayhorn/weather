import axios from "axios";
import {getUid} from "./user";

class LocationService {

  static getLocations = () => {
    let locations = [];
    if (localStorage.getItem('locations')) {
      locations = JSON.parse(localStorage.getItem('locations'));
    }
    return locations;
  };

  static getActiveLocation = (callback) => {
    LocationService.getCurrentLocation(callback);
  };

  static canGeoLocate = (callback) => {
    if (!('geolocation' in navigator)) {
      callback(false);
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        callback(true);
      }, _ => {
        callback(false);
      }, {
        timeout: 1500
      });
    }
  };

  static getCurrentLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(position => {
      axios
        .post('/location_name.php?uid=' + getUid(), {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
        .then((response) => {
          callback({
            name: response.data.data.name,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        })
        .catch((error) => {
          callback({
            name: 'None',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
    }, _ => {
      callback({
        name: 'West Fargo (D)',
        latitude: 46.8292576,
        longitude: -96.9092857
      });
    }, {
      timeout: 1500
    });
  };

}

export default LocationService;
