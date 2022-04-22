import HighTerm from '../weathericons/thermometer-warmer.svg'
import LowTerm from '../weathericons/thermometer-colder.svg'
import Compass from '../weathericons/compass.svg'
import Wind from '../weathericons/wind.svg'
import {degreesToCompass, getIcons} from "../helper";

type AppProps = {
    time: String,
    weathercode: Number,
    temperature: [Number, Number],
    windSpeed: Number,
    windDirection: Number,
    windUnit: String
}

const WeatherCard = ({time, weathercode, temperature, windSpeed, windDirection, windUnit}: AppProps) => {
    const [name, day] = new Intl.DateTimeFormat('en-GB', { weekday: "short", day: "numeric", month: "short" }).format(new Date(time.toString())).split(', ')
    return (
        <div className={'min-w-[150px] flex flex-col h-full w-1/12 p-8 rounded-full items-center bg-transparent ease-in-out hover:bg-gradient-to-b hover:from-[#ff62e3] hover:to-[#2b63f3] transition duration-200 hover:text-white text-[#6e6e6e]'}>
            <h2 className={'font-bold text-white'}>{name}</h2>
            <p className={'font-light'}>{day}</p>
            <img src={getIcons(weathercode)} alt={name}/>
            <div className="flex w-full h-16 items-center justify-between">
                <p className={'text-white'}>{temperature[0].toString()}°</p>
                <img className={'h-full'} src={HighTerm} alt='High'/>
            </div>
            <div className={'flex w-full h-16 items-center justify-between'}>
                <p className={'text-white'}>{temperature[1].toString()}°</p>
                <img className={'h-full'} src={LowTerm} alt="Low"/>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-1/2 items-center">
                    <img className={'w-full'} src={Wind} alt="wind"/>
                    <p className={'font-light text-xs'}>{windSpeed.toString()}{windUnit}</p>
                </div>
                <div className="flex flex-col w-1/2 items-center">
                    <img className={`w-full`} style={{transform: `rotate(${windDirection}deg)`}} src={Compass} alt="compass"/>
                    <p className={'font-light text-xs'}>{degreesToCompass(windDirection)}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard