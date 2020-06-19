import React, { Suspense } from "react";
import { ReactComponent as Drop } from "../assets/drop.svg";
import { ReactComponent as Wind } from "../assets/wind.svg";
import * as dayjs from "dayjs";

function TodayCard({ meteo, sol }) {
  console.log("TodayCard - METEO", meteo);
  console.log(
    "TodayCard - terrestial date",
    dayjs(meteo["Last_UTC"]).format("YYYY-MMM-DD")
  );

  return (
    <Suspense fallback={<div>...loading</div>}>
      <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-white opacity-100 ">
        <div className="mb-20">
          <h2 className="font-bold text-3xl leading-none pb-1">
            {" "}
            {`Mars Sol ${sol}`}{" "}
          </h2>
          <h3 className="leading-none pb-2 pl-1">
            {dayjs(meteo["Last_UTC"]).format("DD MMM YYYY")}
          </h3>

          <strong className="leading-none text-6xl block font-weight-bolder">
            {`${Math.floor(meteo["AT"]["av"])}ºC`}
          </strong>
          <b className="text-2xl block font-bold">{meteo.Season}</b>
          <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
            <div>Min</div>
            <div>{`${Math.floor(meteo["AT"]["mn"])}ºC`}</div>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
            <div>Max</div>
            <div>{`${Math.floor(meteo["AT"]["mx"])}ºC`}</div>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-4 my-2">
            <Drop className="w-4" />
            <div>{`${Math.floor(meteo["PRE"]["av"])} Pa`}</div>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-4">
            <Wind className="w-4" />
            <div>{`${Math.floor(meteo["HWS"]["av"])} s/m`}</div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export default TodayCard;
