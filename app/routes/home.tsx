import { useRef, useEffect, useState } from "react";
import Hero from "./home/hero";
import FormPath from "~/assets/images/form-path.svg";

const Home = () => {
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);

  
  return (
    <section style={{ overflow: "hidden" }}>
      <div ref={heroRef}>
        <Hero />
      </div>
      
      <div className="w-full relative">
        <img 
          className="absolute hidden md:block right-0 top-28 h-72 z-10 pointer-events-none" 
          alt="form-pattern" 
          src={FormPath}
        />

<iframe 
  title="Embedded Form"
  allowTransparency={true} 
  allowFullScreen={true} 
  allow="geolocation; microphone; camera" 
  src="https://fce9cqxp.forms.app/form/67d684423aaa500002ce21cb" 
  frameBorder="0" 
className="h-[2000px] md:h-[1800px]"
  style={{ 
    width: "100%",
    border: "none"
  }}
/>
      </div>
    </section>
  );
};

export default Home;