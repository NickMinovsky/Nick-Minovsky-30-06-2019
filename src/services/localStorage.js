import weather from "../API/weather";

export const onSearchSubmit = async term => {
  const response = await weather.get("/forecast.json", {
    params: {
      q: term
    }
  });
};
