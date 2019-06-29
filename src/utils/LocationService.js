class LocationService {

  static getLocations = () => {
    let locations = [];
    if (localStorage.getItem('locations')) {
      locations = JSON.parse(localStorage.getItem('locations'));
    }
    return locations;
  };

  static getActiveLocation = () => {
    return {
      name: 'West Fargo',
      latitude: 46.8292576,
      longitude: -96.9092857
    };
  };

}

export default LocationService;
