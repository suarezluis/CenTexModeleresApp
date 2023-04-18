/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {WeatherData} from './AirfieldConditions';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';
import {format} from 'date-fns';

type Props = {
  weatherData?: WeatherData;
};

const WeatherTable = ({weatherData}: Props) => {
  return (
    <>
      <DataItem>
        <Icon code={weatherData?.weather?.[0].icon} />
        <DataTitle>
          {capitalizeWords(weatherData?.weather?.[0].description || '')}
        </DataTitle>
      </DataItem>
      <DataItems>
        <DataItem>
          <DataTitle>Clouds</DataTitle>
          <DataText> {weatherData?.clouds.all || 0}%</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Pressure</DataTitle>
          <DataText>{weatherData?.main?.pressure}hPa</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Temperature</DataTitle>
          <DataText>{weatherData?.main?.temp}°F</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Feels like</DataTitle>
          <DataText>{weatherData?.main?.feels_like}°F</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Maximum</DataTitle>
          <DataText>{weatherData?.main?.temp_max}°F</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Minimum</DataTitle>
          <DataText>{weatherData?.main?.temp_min}°F</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Humidity</DataTitle>
          <DataText>{weatherData?.main?.humidity}%</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Visibility</DataTitle>
          <DataText>{weatherData?.visibility}m</DataText>
        </DataItem>
        {weatherData?.sys?.sunrise && (
          <DataItem>
            <DataTitle>Sunrise</DataTitle>
            <DataText>
              {format(
                new Date((weatherData?.sys?.sunrise || 0) * 1000),
                'HH:mm',
              )}
            </DataText>
          </DataItem>
        )}
        {weatherData?.sys?.sunset && (
          <DataItem>
            <DataTitle>Sunset</DataTitle>
            <DataText>
              {format(
                new Date((weatherData?.sys?.sunset || 0) * 1000),
                'HH:mm',
              )}
            </DataText>
          </DataItem>
        )}
        <DataItem>
          <DataTitle>Wind</DataTitle>
          <DataText>{weatherData?.wind?.speed}mph</DataText>
        </DataItem>
        <DataItem>
          <DataTitle>Gust</DataTitle>
          <DataText>{weatherData?.wind?.gust || '-- '}mph</DataText>
        </DataItem>

        <DataItem>
          <DataTitle>Wind Direction</DataTitle>
          <WindDirection degrees={weatherData?.wind?.deg || 0} />
        </DataItem>
      </DataItems>
    </>
  );
};

export default WeatherTable;

const DataItems = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DataTitle = styled.Text`
  font-weight: bold;
  color: white;
`;

const DataText = styled.Text`
  color: white;
`;

const DataItem = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Icon = ({code}: {code?: string}) => {
  return code ? (
    <Image
      source={{uri: `https://openweathermap.org/img/wn/${code}@4x.png`}}
      style={{
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: 'skyblue',
        borderRadius: 50,
      }}
    />
  ) : (
    <></>
  );
};

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const WindDirection = ({degrees}: {degrees: number}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <DataText>
        {degrees}
        {'° '}
        {degrees > 348.75 || degrees <= 11.25
          ? 'N'
          : degrees > 11.25 && degrees <= 33.75
          ? 'NNE'
          : degrees > 33.75 && degrees <= 56.25
          ? 'NE'
          : degrees > 56.25 && degrees <= 78.75
          ? 'ENE'
          : degrees > 78.75 && degrees <= 101.25
          ? 'E'
          : degrees > 101.25 && degrees <= 123.75
          ? 'ESE'
          : degrees > 123.75 && degrees <= 146.25
          ? 'SE'
          : degrees > 146.25 && degrees <= 168.75
          ? 'SSE'
          : degrees > 168.75 && degrees <= 191.25
          ? 'S'
          : degrees > 191.25 && degrees <= 213.75
          ? 'SSW'
          : degrees > 213.75 && degrees <= 236.25
          ? 'SW'
          : degrees > 236.25 && degrees <= 258.75
          ? 'WSW'
          : degrees > 258.75 && degrees <= 281.25
          ? 'W'
          : degrees > 281.25 && degrees <= 303.75
          ? 'WNW'
          : degrees > 303.75 && degrees <= 326.25
          ? 'NW'
          : degrees > 326.25 && degrees <= 348.75
          ? 'NNW'
          : ''}
      </DataText>
      <Point degrees={degrees}>➤</Point>
    </View>
  );
};

const Point = styled.Text<{degrees: number}>`
  transform: rotate(${({degrees}) => degrees - 90 || 0}deg);
  color: skyblue;
  margin-left: 6px;
`;
