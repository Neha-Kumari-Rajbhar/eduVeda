import React from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from 'react-router-dom';

const Action = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      const navigate = useNavigate();

    
  return (
    <div>
      {/* Call-to-Action Section */}
      <section
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16"
        data-aos="zoom-in"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <button onClick={()=>navigate('/login')} className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transform hover:scale-110 transition duration-300">
            Join Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Action
