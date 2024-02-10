import Header from "./components/Header/Header";
import WeatherBoard from "./components/weather/weatherBoard";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default Page;
