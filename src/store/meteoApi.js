import { selector } from "recoil";

const url =
  "https://api.nasa.gov/insight_weather/?api_key=YUNQugao5FacIekyECMtjAVEnP80BgI9J0EOQbtQ&feedtype=json&ver=1.0";

export const fetchMeteo = selector({
  key: "fetchMeteoSelector",
  get: async ({ get }) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      throw error;
    }
  },
});
