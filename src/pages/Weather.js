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
import moment from "moment";
import {Bar, BarChart, LabelList, XAxis} from "recharts";

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const CustomBarLabel = (props) => {

};

class Weather extends React.Component {

  state = {
    location: LocationService.getActiveLocation().name,
    current: {
      icon: '',
      temperature: 0,
      windSpeed: 0,
      windBearing: 0,
    },
    daily: [],
    dayChartData: []
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
        let dayChartData = weather.hourly.data.map(day => {
          return {
            name: moment.unix(day.time).format('ddd'),
            temperature: Math.round(day.apparentTemperature),
            precip: day.precipProbability * 100,
            tempLabel: Math.round(day.apparentTemperature) + '°',
            precipLabel: day.precipProbability > 0 ? (day.precipProbability * 100) + '%' : '',
            time: moment.unix(day.time).format('hA'),
            icon: day.icon
          };
        });
        this.setState({
          current: {
            icon: currently.icon,
            temperature: Math.round(currently.apparentTemperature),
            windSpeed: Math.round(currently.windSpeed || 0),
            windBearing: currently.windBearing || 0,
          },
          daily: weather.daily.data,
          dayChartData: dayChartData
        });
      })
      .catch((error) => {

      });
  }

  temperatureLabel = (props) => {
    const {
      x, y, width, value, index
    } = props;

    const data = this.state.dayChartData[index];
    const r = 24;

    return <svg>
      {IconMap.getIcon(data.icon, r, {width: r, height: r, x: x + r / 2, y: y + 2})}
      <text x={x + width / 2} y={y} fill="#f9f9f9" textAnchor="middle" dy={-6}>{value}°</text>
    </svg>;
  };

  precipLabel  = (props) => {
    const {
      x, y, width, height, index
    } = props;

    const data = this.state.dayChartData[index];

    return <svg>
      <text x={x + width / 2} y={y} fill="#f9f9f9" textAnchor="middle" dy={-6}>{data.precipLabel}</text>
      <text x={x + width / 2} y={175} fill="#f9f9f9" textAnchor="middle" dy={-6}>{data.time}</text>
    </svg>;
  };

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
        <div className='dayChart'>
          <BarChart
            data={this.state.dayChartData}
            height={175}
            width={2500}
            margin={{top: 0, bottom: 25, left: 0, right: 0}}
            barCategoryGap={0}
          >
            <XAxis dataKey="name" xAxisId={0} hide/>
            <XAxis dataKey="name" xAxisId={1} hide/>
            <Bar dataKey='temperature' fill="#2c2c2c" xAxisId={0} label={(x) => this.temperatureLabel(x)}/>
            <Bar dataKey='precip' fill="#8884d8" xAxisId={1} label={(x) => this.precipLabel(x)}/>
          </BarChart>
        </div>
        {/*<div className='daily'>
          {this.state.daily.map(day =>
            <div key={day.time} className='day'>
              <div>{IconMap.getIcon(day.icon, 32)}{moment.unix(day.time).format('ddd')}</div>
              <div className='data'>
                <div>{Math.round(day.apparentTemperatureHigh)}</div>
                <div className='precip'>{day.precipProbability * 100}%{IconMap.getPrecipIcon(day.precipType, 32)}</div>
              </div>
            </div>
          )}
        </div>*/}
      </div>
    );
  }

}

export default Weather;