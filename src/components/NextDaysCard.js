import React from "react";

function NextDaysCard({ meteo, sol, daysCount }) {
  console.log("meteo[sol[i]]", sol[5]);

  return (
    <ul className="flex flex-col">
      {daysCount.map((i) => {
        return (
          <li key={i} className="border-gray-400 flex flex-row mb-2">
            <div className="select-none rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium"> {`Mars Sol ${sol[i]}`}</div>
                <div className="text-white text-sm">
                  {`${Math.floor(meteo[sol[i]]["AT"]["av"])} ºC`}
                </div>
              </div>
              <div className="text-white text-xs">
                {`${Math.floor(meteo[sol[i]]["AT"]["mn"])} ºC / ${Math.floor(
                  meteo[sol[i]]["AT"]["mx"]
                )} ºC`}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default NextDaysCard;
