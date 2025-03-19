import { useEffect, useRef } from "react";
import FormPath from "~/assets/images/form-path.svg";


const Form = ()=>{
   





    return    <section className="pt-32" style={{ overflow: "hidden" }}><div className="w-full relative">
    <img 
      className="absolute hidden md:block right-0 top-28 h-72 z-10 pointer-events-none" 
      alt="form-pattern" 
      src={FormPath}
    />
    <iframe 
    src="https://fce9cqxp.forms.app/form/67d684423aaa500002ce21cb"

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
    
   
   
}
export default Form