NASA API
Your API key for andreacommunication@gmail.com is:

YUNQugao5FacIekyECMtjAVEnP80BgI9J0EOQbtQ
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=YUNQugao5FacIekyECMtjAVEnP80BgI9J0EOQbtQ

==============

import React, { useState, useEffect } from "react";
import TodayCard from "./components/TodayCard";
import NextDaysCard from "./components/NextDaysCard";

function Home() {
const [meteo, setMeteo] = useState(["2", "4"]);

useEffect(() => {
const fetchMeteo = async () => {
const response = await fetch(
"https://api.nasa.gov/insight_weather/?api_key=YUNQugao5FacIekyECMtjAVEnP80BgI9J0EOQbtQ&feedtype=json&ver=1.0"
);

      const result = await response.json();

      setMeteo(result);
    };
    fetchMeteo();

}, []);

console.log(meteo.sol_keys);

return (

<div>
<h4>Hello</h4>
{!meteo.sol_keys ? (
<p>...loading...</p>
) : (
<div>
{meteo.sol_keys.map((key) => (
<div key={key}>{key}</div>
))}
</div>
)}
</div>
);
}
export default Home;
