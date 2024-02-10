import pinIcon from "../../assets/pin.svg";
import { useWeatherContext } from "../../context";
import getTimeFormate from "../../utils/TimeFormate";
import getWeatherIcon from "../../utils/getIcons";

const WeatherHeadLine = () => {
  const { weatherData } = useWeatherContext();
  const { temperature, location, time, climate } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {`${Math.round(temperature)}°`}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getTimeFormate(time, "time", false)} -{" "}
        {getTimeFormate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
