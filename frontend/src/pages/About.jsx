import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100 mt-10">
      
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-10 mb-10">
        {/* Heading Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
        Empowering individuals and businesses with innovative solutions that drive success and transformation
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.freepik.com/512/7156/7156578.png"
              alt="Our Mission"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-500 text-sm text-center">
            To empower individuals and organizations to achieve their highest potential through world-class services and solutions
            </p>
          </div>

        
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1465/1465429.png"
              alt="Our Vision"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-500 text-sm text-center">
              To be a global leader recognized for innovation and quality.
            </p>
          </div>

         
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://icons.veryicon.com/png/o/education-technology/management-icon/value-6.png"
              alt="Our Values"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Values
            </h2>
            <p className="text-gray-500 text-sm text-center">
              Integrity, Excellence, and Innovation are at the heart of everything we do.
            </p>
          </div>

          
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5065/5065337.png"
              alt="Our Team"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Team
            </h2>
            <p className="text-gray-500 text-sm text-center">
              A passionate group of individuals working together to create a better future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

