
export const API = Object.freeze({
  location: (city) => `https://nominatim.openstreetmap.org/search?q=${city}&format=json&accept-language=en`
});