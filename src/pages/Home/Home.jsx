import React from "react";
import "./Home.css";
import OurServices from "../../components/OurServices/OurServices";
import Featured from "../../components/Featured/Featured";
import Idea from "../../components/Idea/Idea";
import BlogsSection from "../../components/BlogsSection/BlogsSection";
import Subscribe from "../../components/Subscribe/Subscribe";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="homepage">
      <div className="bg home">
        <h1 className="head">
          <TypeAnimation
            sequence={[
              "Find Your Dream", // Types 'One'
              1000, // Waits 1s
              "Your Dream Our Passion", // Deletes 'One' and types 'Two'
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "80px", display: "inline-block" }}
          />
        </h1>
      </div>

      {/* <HomeContent /> */}
      <OurServices />
      <Idea />
      <Featured />
      <BlogsSection />
      <Subscribe />
    </div>
  );
};

export default Home;
