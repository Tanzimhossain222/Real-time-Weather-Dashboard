import Page from "./Page";
import { FavouriteProvider, WeatherProvider } from "./provider";

const App = () => {
  return (
    <div>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </div>
  );
};

export default App;
