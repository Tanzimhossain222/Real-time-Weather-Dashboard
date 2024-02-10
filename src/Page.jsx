import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/weather/weatherBoard";
import { useWeatherContext } from "./context";
import getBackground from "./utils/getBackground";

const Page = () => {
  const { loading, weatherData } = useWeatherContext();

  const [climateImage, setClimateImage] = useState("");

  useEffect(() => {
    const bgImage = getBackground(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImage})` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
