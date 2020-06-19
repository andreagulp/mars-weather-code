import React from "react";

function NextDaysCard({ meteo, sol, daysCount }) {
  console.log("meteo[sol[i]]", sol[5]);

  return (
    <ul className="flex flex-col">
      {daysCount.map((i) => {
        return (
          <li key={i} className="flex flex-row mb-2">
            <div className="select-none rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out shadow-sm">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium font-bold">
                  {" "}
                  {`Mars Sol ${sol[i]}`}
                </div>
                <div className="text-sm">
                  {`${Math.floor(meteo[sol[i]]["AT"]["av"])} ºC`}
                </div>
              </div>
              <div className="text-xs">
                <span className="text-blue-600">
                  {`${Math.floor(meteo[sol[i]]["AT"]["mn"])} ºC /`}{" "}
                </span>
                <span className="text-orange-600">{`${Math.floor(
                  meteo[sol[i]]["AT"]["mx"]
                )} ºC`}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default NextDaysCard;
