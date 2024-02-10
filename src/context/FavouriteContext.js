import { createContext, useContext } from "react";

const FavouriteContext = createContext();

const useFavouriteContext = () => {
    const context = useContext(FavouriteContext);
    if (!context) {
        throw new Error("useFavouriteContext must be used within a FavouriteProvider");
    }
    return context;
}

export { FavouriteContext, useFavouriteContext };

