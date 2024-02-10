import cloudIcon from "./../assets/cloud.svg";
import HazeIcon from "./../assets/haze.svg";
import snowIcon from "./../assets/icons/snow.svg";
import sunnyIcon from "./../assets/icons/sunny.svg";
import windIcon from "./../assets/icons/wind.svg";
import rainIcon from "./../assets/rainy.svg";
import thunderIcon from "./../assets/thunder.svg";

function getWeatherIcon(climate) {
    switch (climate) {
        case "Rain":
            return rainIcon;
        case "Clear":
            return sunnyIcon;
        case "Clouds":
            return cloudIcon;
        case "Haze":
            return HazeIcon;
        case "Snow":
            return snowIcon;
        case "Wind":
            return windIcon;
        case "Thunder":
            return thunderIcon;
        case "Fog":
            return HazeIcon;
        case "Mist":
            return HazeIcon;
        default:
            return sunnyIcon;

    }
}

export default getWeatherIcon;

