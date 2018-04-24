import { config } from 'dotenv';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
