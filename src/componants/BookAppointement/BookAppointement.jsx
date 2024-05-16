import React,{useState,useEffect} from 'react';
import bookappoint from '../../../public/images/bookappointement.png';
import { Link } from 'react-router-dom';

const BookAppointement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/book_appointement'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
     
      <div className="max-w-screen-xl lg:mx-auto mx-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {data.map((item) => (
          <div className="flex flex-col shadow-md w-full rounded-2xl p-6">
            <div className="flex justify-center items-center">
              
              <img className="w-16 h-16 mr-4 -mt-16 rounded-full" src={bookappoint} alt="" />
              
              
              <div>
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="text-xs">
                {item.short_description}
                </p>
                <h1 className="text-xs shadow-2xl bg-[#D9D9D9] rounded-sm mt-2 p-2 w-40">
                {item.speciality}
                </h1>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <h1>{item.experience}</h1>
                  </div>
                  <div>
                    <h1>₹{item.fees}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 border rounded-b-2xl border-[#086AAE]">
              <div>
                <button className="border-[#086AAE] text-[#086AAE] 
                 lg:px-4 lg:py-2 lg:w-36 text-xs w-36 mt-2 lg:mt-1 ">
                  View Full Profile
                </button>
              </div>
              <div>
              <Link to={`/appointment/${item._id}`}>
              <button className="text-white bg-[#086AAE] lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
                md:px-4 md:py-3 md:ml-24
                rounded-b-2xl ml-8">
                Book Appointment
              </button>
            </Link>
            </div>
            </div>
          </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default BookAppointement;
