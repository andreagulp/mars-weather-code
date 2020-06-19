import React, { Suspense } from "react";
import { ReactComponent as Drop } from "../assets/drop2.svg";
import { ReactComponent as Wind } from "../assets/wind2.svg";
import { ReactComponent as Thermometer } from "../assets/thermometer.svg";
import * as dayjs from "dayjs";

//

function TodayCard({ meteo, sol }) {
  console.log("TodayCard - METEO", meteo);
  console.log(
    "TodayCard - terrestial date",
    dayjs(meteo["Last_UTC"]).format("YYYY-MMM-DD")
  );

  return (
    <Suspense fallback={<div>...loading</div>}>
      <div className="rounded-lg px-6 py-6 w-full opacity-100">
        <div className="mb-20">
          <h2 className="font-bold text-3xl leading-none pb-1">
            {`Mars Sol ${sol}`}
          </h2>
          <h3 className="leading-none pb-2 pl-1">
            {dayjs(meteo["Last_UTC"]).format("DD MMM YYYY")}
          </h3>

          <strong className="leading-none text-6xl block font-weight-bolder">
            {`${Math.floor(meteo["AT"]["av"])}ºC`}
          </strong>
          <b className="text-2xl block font-bold">{meteo.Season}</b>
          <div className=" max-w-sm">
            <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
              <Thermometer className="fill-current  text-blue-600 inline-block w-6" />
              <div>{`${Math.floor(meteo["AT"]["mn"])}ºC`}</div>
            </div>
            <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
              <Thermometer className="fill-current text-orange-600 inline-block w-6" />
              <div>{`${Math.floor(meteo["AT"]["mx"])}ºC`}</div>
            </div>
            <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
              <Drop className="fill-current text-blue-400 inline-block w-6" />
              <div>{`${Math.floor(meteo["PRE"]["av"])} Pa`}</div>
            </div>
            <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
              <Wind className="fill-current text-purple-600 inline-block w-6 transform rotate-90" />
              <div>{`${Math.floor(meteo["HWS"]["av"])} s/m`}</div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export default TodayCard;
