const API_key = import.meta.env.VITE_WEATHER_API_KEY;



//fetching data from the api use then and catch

// function getLocationCity(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

//     fetch(url)
//         .then(response => response.json())
//         .then((response) => {
//             let data = response;

//             return { ...data };
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });

// }


async function getLocationCity(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
        const response = await fetch(url);
        const data = await response.json();
        return { 
            location: data?.name,
            latitude: data?.coord?.lat,
            longitude: data?.coord?.lon,
        };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getLocationCity };
