import { useEffect, useState } from "react";
import redHeartLogo from "../../assets/heart-red.svg";
import heartLogo from "../../assets/heart.svg";
import { useFavouriteContext, useWeatherContext } from "../../context";

const AddToFavourite = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const { addToFavourite, removeFromFavourite, favourites } =
    useFavouriteContext();

  const { weatherData } = useWeatherContext();
  const { latitude, longitude, location } = weatherData;

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (found) {
      removeFromFavourite(location);
      setIsFavourite(false);
    } else {
      addToFavourite(latitude, longitude, location);
      setIsFavourite(true);
    }
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    if (found) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeartLogo : heartLogo} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
