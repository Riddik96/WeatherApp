import Compass from './weathericons/compass.svg'
import Termometer from './weathericons/thermometer.svg'
import Wind from './weathericons/wind.svg'
import ClearSky from './weathericons/clear-day.svg'
import MainlyClear from './weathericons/clear-day.svg'
import PartiallyCloudy from './weathericons/partly-cloudy-day.svg'
import OverCast from './weathericons/overcast-day.svg'
import Fog from './weathericons/fog-day.svg'
import Drizzle from './weathericons/drizzle.svg'
import Rain from './weathericons/rain.svg'
import SnowFall from './weathericons/snow.svg'
import ThunderStorm from './weathericons/thunderstorms-day.svg'
import ThunderStormRain from './weathericons/thunderstorms-day-rain.svg'
import ThunderStormSnow from './weathericons/thunderstorms-day-snow.svg'

export const getIcons = (id: Number | String) => {
    switch (id) {
        case 'thermometer':
            return Termometer
        case 'compass':
            return Compass
        case 'wind':
            return Wind
        case 0:
            return ClearSky
        case 1:
            return MainlyClear
        case 2:
            return PartiallyCloudy
        case 3:
            return OverCast
        case 45:
            return Fog
        case 48:
            return Fog
        case 51:
            return Drizzle
        case 53:
            return Drizzle
        case 55:
            return Drizzle
        case 56:
            return Drizzle
        case 57:
            return Drizzle
        case 61:
            return Rain
        case 63:
            return Rain
        case 65:
            return Rain
        case 66:
            return Rain
        case 67:
            return Rain
        case 71:
            return SnowFall
        case 73:
            return SnowFall
        case 75:
            return SnowFall
        case 77:
            return SnowFall
        case 80:
            return Rain
        case 81:
            return Rain
        case 82:
            return Rain
        case 85:
            return SnowFall
        case 86:
            return SnowFall
        case 95:
            return ThunderStorm
        case 96:
            return ThunderStormRain
        case 99:
            return ThunderStormSnow
        default:
            return Compass
    }
}

export const degreesToCompass = (degrees: any) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NWW']
    return directions[Math.round(degrees / 22.5)]
}