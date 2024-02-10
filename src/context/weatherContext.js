import { createContext, useContext } from "react";

const WeatherContext = createContext();

const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeatherData must be used within a WeatherProvider");
    }
    return context;
}

export { WeatherContext, useWeatherContext };
