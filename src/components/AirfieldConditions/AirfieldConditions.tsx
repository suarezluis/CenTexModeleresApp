import React, {useEffect} from 'react';
import {SubTitle} from '../Root/Root';
import axios from 'axios';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {format} from 'date-fns';
import WeatherTable from './WeatherTable';

export interface WeatherData {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys?: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

interface ForecastData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  dt_txt: string;
}

const AirfieldConditions = () => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | undefined>(
    undefined,
  );
  const [forecastData, setForecastData] = React.useState<ForecastData[]>([]);
  const [selectedForecastIndex, setSelectedForecastIndex] = React.useState(5);

  const moveSelectedForecastIndex = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (selectedForecastIndex > 0) {
        setSelectedForecastIndex(prevState => prevState - 1);
      }
    } else if (selectedForecastIndex < forecastData.length - 1) {
      setSelectedForecastIndex(prevState => prevState + 1);
    }
  };

  const getWeather = () => {
    axios(
      'https://api.openweathermap.org/data/2.5/weather?lat=31.008748&lon=-97.625177&units=imperial&appid=991660e562aeb201f32c6faaa300a2fe',
    )
      .then(response => {
        const {data} = response;
        // console.log(data);
        setWeatherData(data);
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert('There was an error getting the weather data.'));
  };

  const getForecastData = () => {
    axios(
      'https://api.openweathermap.org/data/2.5/forecast?lat=31.008748&lon=-97.625177&units=imperial&appid=991660e562aeb201f32c6faaa300a2fe',
    )
      .then(response => {
        const {data} = response;
        console.log(data.list);
        setForecastData(data.list);
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert('There was an error getting the forecast data.'));
  };

  useEffect(() => {
    getWeather();
    getForecastData();
  }, []);

  return (
    <AirfieldConditionsContainer>
      <Divider />
      <SubTitle2>Current conditions</SubTitle2>
      <WeatherTable weatherData={weatherData} />
      <Divider />
      <SubTitle2>Forecast</SubTitle2>
      <ForecastSelector>
        <Arrow onPress={() => moveSelectedForecastIndex('left')}>
          <ArrowText>⏪</ArrowText>
        </Arrow>
        <SubTitle2>
          {format(
            new Date(forecastData[selectedForecastIndex]?.dt_txt || '2023'),
            'PPPP HH:mm',
          )}
        </SubTitle2>
        <Arrow onPress={() => moveSelectedForecastIndex('right')}>
          <ArrowText>⏩</ArrowText>
        </Arrow>
      </ForecastSelector>
      {/* <Text>{selectedForecastIndex}</Text> */}
      <WeatherTable weatherData={forecastData[selectedForecastIndex]} />
      <Divider />
    </AirfieldConditionsContainer>
  );
};

export default AirfieldConditions;

const AirfieldConditionsContainer = styled.View`
  justify-content: center;
`;

const SubTitle2 = styled.Text`
  text-align: center;
  color: white;
`;

const Divider = styled.View`
  margin: 10px;
  height: 1px;
  background-color: #838383;
`;

const ForecastSelector = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.TouchableOpacity`
  font-size: 30px;
  padding: 0 15px;
`;

const ArrowText = styled.Text`
  font-size: 30px;
  padding: 0 15px;
  color: white;
`;
