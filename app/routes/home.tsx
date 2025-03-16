import Hero from "./home/hero"
import FormPath from "~/assets/images/form-path.svg"

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col overflow-hidden">
      <Hero />
      
      <div className="w-full relative flex-1">
        {/* Form pattern image positioned on the left side */}
        <img 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-72 z-50" 
          alt="form-pattern" 
          src={FormPath}
        />

        {/* Updated iframe with the exact properties provided */}
        <iframe 
          allowTransparency={true} 
          allowFullScreen={true} 
          allow="geolocation; microphone; camera" 
          src="https://fce9cqxp.forms.app/form/67d684423aaa500002ce21cb" 
          frameBorder="0" 
          style={{ 
            width: "100vw", 
            minWidth: "100%", 
            height: "100vh", 
            border: "none" 
          }}
          className="relative z-10"
        />
      </div>
    </section>
  )
}

export default Home