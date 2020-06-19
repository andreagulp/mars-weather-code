import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import TodayCard from "./components/TodayCard";
import NextDaysCard from "./components/NextDaysCard";
import { fetchMeteo } from "./store/meteoApi";

const previousWeatherDaysCount = [5, 4, 3, 2, 1];

function Home() {
  const meteoData = useRecoilValue(fetchMeteo);

  console.log("MeteoInformation:", meteoData.sol_keys[6]);
  // console.log(
  //   "MeteoInformation:",
  //   Object.keys(meteoData[meteoData.sol_keys[6]])
  // );

  return (
    <div
      className="grid md:grid-cols-2 grid-cols-1 md:grid-flow-col gap-6 "
      // style={{
      //   backgroundImage: 'url(require("https://i.imgur.com/R68RNUK.jpg"))',
      // }}
    >
      <Suspense fallback={<div>...loading...</div>}>
        <div className="">
          <TodayCard
            meteo={meteoData[meteoData.sol_keys[6]]}
            sol={meteoData.sol_keys[6]}
          />
        </div>

        <div className="">
          <NextDaysCard
            meteo={meteoData}
            sol={meteoData.sol_keys}
            daysCount={previousWeatherDaysCount}
          />
        </div>
      </Suspense>
    </div>
  );
}
export default Home;
