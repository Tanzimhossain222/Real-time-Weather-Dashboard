import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    const newFavouriteItem = { latitude, longitude, location };
    const newFavourites = [...favourites, newFavouriteItem];
    setFavourites(newFavourites);
  };

  const removeFromFavourite = (location) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.location !== location
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
