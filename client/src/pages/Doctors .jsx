import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();

  const { doctorData } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctorData.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctorData);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctorData, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p onClick={()=>{
            speciality === 'General Physician' ? navigate('/doctors') :navigate('/doctors/General Physician')
          }} className={`w-[94 vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General Physician' ? 'bg-indigo-100 text-black' : ''}` } >General Physician</p>
          <p onClick={()=>{
            speciality === 'Cardiologist' ? navigate('/doctors') :navigate('/doctors/Cardiologist')
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cardiologist' ? 'bg-indigo-100 text-black' : ''}`} >Cardiologist</p>
          <p onClick={()=>{
            speciality === 'Dermatologist' ? navigate('/doctors') :navigate('/doctors/Dermatologist')
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`  } >Dermatologist</p>
          <p onClick={()=>{
            speciality === 'Neurologist' ? navigate('/doctors') :navigate('/doctors/Neurologist')
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`  } >Neurologist</p>
          <p onClick={()=>{
            speciality === 'Urologist' ? navigate('/doctors') :navigate('/doctors/Urologist')
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Urologist' ? 'bg-indigo-100 text-black' : ''}`  } >Urologist</p>
          <p onClick={()=>{
            speciality === 'Radiologist' ? navigate('/doctors') :navigate('/doctors/Radiologist')
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Radiologist' ? 'bg-indigo-100 text-black' : ''}`  } >Radiologist</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item) => (
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
      </div>
    </div>
  );
}

export default Doctors;
