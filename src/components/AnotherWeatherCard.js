import React from "react";
import { ReactComponent as Drop } from "../assets/drop.svg";
// import drop from "../assets/drop.svg";
//
// import picture1 from "../assets/Picture1.png";

function AnotherWeatherCard() {
  return (
    <div class="w-64 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
      <div class="text-md font-bold flex flex-col text-gray-900">
        <span class="uppercase">Today</span>{" "}
        <span class="font-normal text-gray-700 text-sm">July 29</span>
      </div>
      <div class="w-32 h-32 flex items-center justify-center"></div>

      <p class="text-gray-700 mb-2">Partly cloud</p>
      <div class="text-3xl font-bold text-gray-900 mb-6">
        32º<span class="font-normal text-gray-700 mx-1">/</span>20º
      </div>
      <div class="flex justify-between w-full">
        <div class="flex items-center text-gray-700 px-2">
          <div className="mr-2 h-4">
            {/* <img src={drop} alt="drop" /> */}
            {/* <img src="#" alt="x" /> */}
          </div>
          100 l/m<sup>2</sup>
        </div>
        <div class="flex items-center text-gray-700 px-2">20 km/h</div>
      </div>
      <Drop />
    </div>
  );
}

export default AnotherWeatherCard;
