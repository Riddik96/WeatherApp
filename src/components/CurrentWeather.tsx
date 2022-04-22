import {degreesToCompass, getIcons} from "../helper";

type AppProps = {
    currentWeather: {
        weathercode: Number,
        temperature: Number,
        winddirection: Number,
        windspeed: Number,
    } | null,
    dailyUnits: {
        temperature_2m_max: String,
        windspeed_10m_max: String,
    } | null
}

const CurrentWeather = ({currentWeather, dailyUnits} : AppProps) => {
  return (
      <>
          <h2 className={'text-xl'}>Current Weather</h2>
          {currentWeather && dailyUnits && <div className="flex flex-col items-center md:h-48 md:flex-row">
              {<img className={'max-h-full'} src={getIcons(currentWeather?.weathercode)}
                    alt=""/>}
              <div className="flex items-start justify-evenly w-full md:h-full md:p-8 mb-4 md:mb-0">
                  <div className="flex flex-col w-full md:w-1/3 md:flex-col md:h-full items-center">
                      <img className={'h-2/3'} src={getIcons('thermometer')} alt='thermometer'/>
                      <p>{`${currentWeather.temperature} ${dailyUnits.temperature_2m_max}`}</p>
                  </div>
                  <div className={'flex flex-col w-full md:w-1/3 md:flex-col md:h-full items-center'}>
                      <img className={'h-2/3'} src={getIcons('compass')} style={{transform: `rotate(${currentWeather.winddirection}deg)`}} alt='compass'/>
                      <p>{degreesToCompass(currentWeather.winddirection)}</p>
                  </div>
                  <div className="flex flex-col w-full md:w-1/3 md:flex-col md:h-full items-center">
                      <img className={'h-2/3'} src={getIcons('wind')} alt='wind'/>
                      <p>{`${currentWeather.windspeed} ${dailyUnits.windspeed_10m_max}`}</p>
                  </div>
              </div>
          </div>}
      </>
  )
}

export default CurrentWeather