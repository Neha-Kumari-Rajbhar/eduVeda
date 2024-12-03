import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchQuery.trim() !== ""){
      navigate(`/course/search?query=${searchQuery}`)
    }
    setSearchQuery("");
  }

  return (
   <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-24 px-4 text-center "
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-black text-4xl font-bold mb-4">
        Unleash Your Potential with Our Courses
        </h1>
        <p className=" text-white mb-8">
        Browse through a wide range of courses, designed to help you learn new skills, advance in your career, and pursue your passions.
        </p>

        <form onSubmit={searchHandler} className="flex items-center bg-white  rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find your perfect course"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900  placeholder-gray-500"
          />
          <Button
            type="submit"
            className="bg-orange-600 text-white px-6 py-4 font-semibold rounded-r-full hover:bg-orange-700"
          >
            Search
          </Button>
        </form>
       <Button onClick={()=> navigate(`/course/search?query`)} className="bg-zinc-800 text-white px-6 py-6 rounded-full shadow hover:bg-zinc-950 font-medium tracking-widest uppercase">Explore Courses</Button>
      </div>
    </div>
  );
};

export default HeroSection;

