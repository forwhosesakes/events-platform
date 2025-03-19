import { useRef, useEffect, useState } from "react";
import Hero from "./home/hero";

const Home = () => {
  const heroRef = useRef(null);

  
  return (
    <section style={{ overflow: "hidden" }}>
      <div ref={heroRef}>
        <Hero />
      </div>
      
     
    </section>
  );
};

export default Home;