import Page from "./Page";
import { WeatherProvider } from "./provider";

const App = () => {
  return (
    <div>
      <WeatherProvider>
        <Page />
      </WeatherProvider>
    </div>
  );
};

export default App;
