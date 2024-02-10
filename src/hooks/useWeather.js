import { useEffect, useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        temperature: "",
        climate: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    });

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY

    const fetchWeatherData = async ({ latitude, longitude }) => {

        try {
            setLoading({ ...loading, state: true, message: "Fetching weather data..." });

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);

            if (!response.ok) {
                const errorMessage = `An error has occurred: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updatedWeatherData = {
                ...weatherData,
                location: data?.name,
                temperature: data?.main?.temp,
                climate: data?.weather[0]?.main,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: data?.coord?.lon,
                latitude: data?.coord?.lat
            };

            setWeatherData(updatedWeatherData);

        } catch (error) {
            setError(error);
        } finally {
            setLoading({ ...loading, state: false, message: "" });
        }

    }

    useEffect(() => {
        setLoading({
            state: true,
            message: "Finding your location..."
        })

        navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;
            fetchWeatherData({ latitude, longitude });
        });


        return () => {
            setWeatherData({});
            setLoading({ state: false, message: "" });
            setError(null);
        }

    }, []);

    return {
        weatherData,
        loading,
        error,
    }

}

export default useWeather;