import {useEffect, useState} from "react";
import {ForecastResponse} from "../customTypes";
import WeatherCard from "./WeatherCard";
import CurrentWeather from "./CurrentWeather";

type AppProps = {
    latitude: Number | null,
    longitude: Number | null
}

const apiEndpoint = 'https://api.open-meteo.com/v1/forecast'
const apiParams = '&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&timezone=Europe%2FLondon&past_days=1'

const Main = ({latitude, longitude}: AppProps) => {
    const [forecast, setForecast] = useState<ForecastResponse | null>(null)

    useEffect(() => {
        const getForecast = async () => {
            try {
                let data = await fetch(`${apiEndpoint}?latitude=${latitude}&longitude=${longitude}${apiParams}`)
                data = await data.json()
                return data
            } catch (e) {
                console.log(e)
                return null
            }
        }
        getForecast().then(data => setForecast(data as ForecastResponse))
    }, [latitude, longitude])


    return (
        <div className={'min-w-full p-2'}>
            {
                forecast && <div className="flex flex-col">
                        <CurrentWeather dailyUnits={forecast.daily_units} currentWeather={forecast.current_weather} />
                        <h2 className={'text-xl'}>7 Days Forecast</h2>
                        <div className={'flex justify-evenly items-center flex-wrap w-screen'}>
                            {forecast.daily && forecast.daily.apparent_temperature_max.map((_, i) => {
                                return <WeatherCard
                                    time={forecast?.daily.time[i]}
                                    weathercode={forecast?.daily.weathercode[i]}
                                    temperature={[forecast?.daily.temperature_2m_max[i], forecast?.daily.temperature_2m_min[i]]}
                                    windSpeed={forecast?.daily.windspeed_10m_max[i]}
                                    windDirection={forecast?.daily.winddirection_10m_dominant[i]}
                                    windUnit={forecast?.daily_units.windspeed_10m_max}
                                    key={i}/>
                            })}
                        </div>
                    </div>
            }
        </div>
    )
}

export default Main