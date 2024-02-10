import { createContext, useContext } from "react";

const LocationContext = createContext();

const useLocationContext = () => {
    return useContext(LocationContext);
}

export { LocationContext, useLocationContext };