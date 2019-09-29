import React from "react";
import "../scss/weather.scss";
import axios from "axios";
import LocationService from "../utils/LocationService";
import {getUid} from "../utils/user";
import styled from "@emotion/styled";
import IconMap from "../utils/IconMap";
import WindIcon from "@material-ui/icons/Navigation";
import moment from "moment";
import {Bar, BarChart, XAxis} from "recharts";
import Navbar from "../components/Navbar";

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

class Weather extends React.Component {

  state = {
    location: '',
    current: {
      icon: '',
      temperature: 0,
      windSpeed: 0,
      windBearing: 0,
    },
    daily: [],
    hourlyChartData: []
  };

  componentDidMount() {
    LocationService.getActiveLocation(location => {
      axios
        .post('/weather.php?uid=' + getUid(), {
          lat: location.latitude,
          lon: location.longitude
        })
        .then((response) => {
          let weather = response.data.data;
          let {currently} = weather;
          console.log(weather);
          let maxTemp = Math.max(...weather.hourly.data.map(d => d.apparentTemperature));
          let minTemp = Math.min(...weather.hourly.data.map(d => d.apparentTemperature));
          const tempRange = maxTemp - minTemp;

          const barTempBase = 40;
          const barTempRange = 33;

          const precipCap = 18;

          let hourlyChartData = weather.hourly.data.map(day => {
            return {
              name: moment.unix(day.time).format('ddd'),
              temperature: Math.round((1 - ((maxTemp - day.apparentTemperature) / tempRange)) * barTempRange + barTempBase),
              precip: (day.precipProbability * 100) / (100 / precipCap),
              tempLabel: Math.round(day.apparentTemperature) + '°',
              precipLabel: day.precipProbability > 0 ? Math.round(day.precipProbability * 100) + '%' : '',
              time: moment.unix(day.time).format('hA'),
              icon: day.icon
            };
          });
          this.setState({
            location: location.name,
            current: {
              icon: currently.icon,
              temperature: Math.round(currently.apparentTemperature),
              windSpeed: Math.round(currently.windSpeed || 0),
              windBearing: currently.windBearing || 0,
            },
            daily: weather.daily.data,
            hourlyChartData: hourlyChartData
          });
        })
        .catch((error) => {

        });
    });
  }

  temperatureLabel = (props) => {
    const {
      x, y, width, value, index
    } = props;

    const data = this.state.hourlyChartData[index];
    const r = 24;

    return <svg>
      {IconMap.getIcon(data.icon, r, {width: r, height: r, x: x + r / 2, y: y + 2})}
      <text x={x + width / 2} y={y} fill="#f9f9f9" textAnchor="middle" dy={-6}>{data.tempLabel}</text>
    </svg>;
  };

  precipLabel = (props) => {
    const {
      x, y, width, height, index
    } = props;

    const data = this.state.hourlyChartData[index];

    return <svg>
      <text x={x + width / 2} y={y} fill="#f9f9f9" textAnchor="middle" dy={-6}>{data.precipLabel}</text>
      <text x={x + width / 2} y={200} fill="#f9f9f9" textAnchor="middle" dy={-6}>{data.time}</text>
    </svg>;
  };

  render() {
    let {current} = this.state;

    return (
      <div>
        <Navbar/>
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
            data={this.state.hourlyChartData}
            height={200}
            width={2500}
            margin={{top: 5, bottom: 25, left: 0, right: 0}}
            barCategoryGap={0}
          >
            <XAxis dataKey="name" xAxisId={0} hide/>
            <XAxis dataKey="name" xAxisId={1} hide/>
            <Bar dataKey='temperature' fill="#2c2c2c" xAxisId={0} label={(x) => this.temperatureLabel(x)}/>
            <Bar dataKey='precip' fill="#8884d8" xAxisId={1} label={(x) => this.precipLabel(x)} maxBarSize={25}/>
          </BarChart>
        </div>
        <div className='daily'>
          {this.state.daily.map(day =>
            <div key={day.time} className='day'>
              <div className='title'>
                {moment.unix(day.time).format('ddd')}
              </div>
              <div className='icon'>{IconMap.getIcon(day.icon, 32)}</div>
              <div className='data'>
                <div>{Math.round(day.apparentTemperatureHigh)}°</div>
                <div>{Math.round(day.precipProbability * 100)}%</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

}

export default Weather;