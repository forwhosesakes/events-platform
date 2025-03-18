import { useRef, useEffect, useState } from "react";
import Hero from "./home/hero";
import FormPath from "~/assets/images/form-path.svg";

const Home = () => {
  const heroRef = useRef(null);
  const iframeRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (iframeRef.current) {
      // Get the iframe document
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      
      // Write the iframe content including the embed
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body, html {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
                overflow: hidden;
              }
              iframe {
                width: 100%;
                height: 100%;
                border: none;
              }
            </style>
          </head>
          <body>
            <iframe 
              src="https://fce9cqxp.forms.app/form/67d684423aaa500002ce21cb"
              allowtransparency="true" 
              allowfullscreen="true" 
              allow="geolocation; microphone; camera" 
              frameborder="0">
            </iframe>
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, []);
  
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
          ref={iframeRef}
          title="Controlled Form Embed"
          frameBorder="0" 
          className="h-[2000px] md:h-[1800px]"
          style={{ 
            width: "100%",
            border: "none"
          }}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </section>
  );
};

export default Home;