import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const {doctorData} = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Specialists Available</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Browse our list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
        {doctorData.slice(0, 12).map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/appointment/${item.id}`)}
            className="flex flex-col border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 hover:shadow-lg bg-white h-[320px]"
          >
            <div className="h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover bg-blue-50"
                src={item.image}
                alt={`Dr. ${item.name}`}
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <h3 className="text-gray-900 text-lg font-medium line-clamp-1">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/doctors")}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 border hover:border-blue-500"
      >
        View More
      </button>
    </div>
  );
}

export default TopDoctors;
