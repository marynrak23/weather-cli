import axios from 'axios'
import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'


const getWeather = async (city) => {

    const token = await getKeyValue(TOKEN_DICTIONARY.token) 
    if(!token) {
        throw new Error('Enter API KEY with command -t [TOKEN_API_KEY]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data; 
}

export { getWeather }