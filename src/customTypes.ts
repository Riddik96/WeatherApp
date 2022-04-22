export interface ApiResponse extends Response {
    city: String,
    locality: String,
    countryName: String
}

export interface ForecastResponse extends Response {
    daily: {
        time: [String],
        sunrise: [String],
        sunset: [String],
        apparent_temperature_max: [Number],
        apparent_temperature_min: [Number],
        precipitation_hours: [Number],
        precipitation_sum: [Number],
        shortwave_radiation_sum: [Number],
        temperature_2m_max: [Number],
        temperature_2m_min: [Number],
        weathercode: [Number],
        winddirection_10m_dominant: [Number],
        windgusts_10m_max: [Number],
        windspeed_10m_max: [Number]
    },
    daily_units: {
        apparent_temperature_max: String,
        apparent_temperature_min: String,
        precipitation_hours: String,
        precipitation_sum: String,
        shortwave_radiation_sum: String,
        temperature_2m_max: String,
        temperature_2m_min: String,
        windgusts_10m_max: String,
        windspeed_10m_max: String
    },
    current_weather: {
        temperature: Number,
        weathercode: Number,
        winddirection: Number,
        windspeed: Number
    }
}