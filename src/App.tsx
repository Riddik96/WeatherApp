import {useEffect, useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import {ApiResponse} from "./customTypes";

const apiEndPoint = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

function App() {
    const [location, setLocation] = useState<ApiResponse | null>(null)
    const [coordinates, setCoordinates] = useState<GeolocationPosition | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((currentLocation) => {
            setCoordinates(currentLocation)
            getLocation(currentLocation).then(loc => setLocation(loc as ApiResponse))
        })
    }, [])

    const getLocation = async (position: GeolocationPosition) => {
        try {
            let data = await fetch(`${apiEndPoint}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
            data = await data.json()
            return data
        }catch (e){
            console.log(e)
            return null
        }
    }

    const getLocationName = () => {
        const name = location ? location.city ? location.city : location.locality ?? null : null
        const nation = location ? location.countryName : null
        return name && nation ? `${name}, ${nation}` : ''
    }

    return (
        <div className={'min-h-screen max-w-full overflow-hidden w-full bg-[#1f1f1f] text-[#fcfcfc]'}>
            <Header name={getLocationName()}/>
            <Main latitude={coordinates?.coords.latitude ?? null} longitude={coordinates?.coords.longitude ?? null}/>
        </div>
    );
}

export default App;
