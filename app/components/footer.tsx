import FooterLogo from "~/assets/images/youth-comm.svg";
import { GLOSSARY } from "~/lib/glossary";
import YoutubeIcon from "~/assets/icons/youtube.svg?react"
import XIcon from "~/assets/icons/x-social.svg?react"
import FooterShape from "~/assets/icons/footer-shape.svg"

const Footer = () => {
  
  return (
    <footer className="relative mt-32 text-secondary bg-transparent">
      {/* <img className={"absolute -top-6 md:-top-28  z-10 w-full"} src={FooterLogo} alt="footer" /> */}
      <div 
  className="h-[16px] w-full" 
  style={{ 
    background: "linear-gradient(96deg, #233A77 4.01%, #1C81AC 47.32%, #3EB985 82.75%)" 
  }} 
/>
      <div className=" relative z-50 py-12 md:px-24 px-8 ">
        <div className="flex justify-between ">
          <div>
            <img src={FooterLogo} alt="logo" />
            <p className="font-normal text-xs lg:text-[16px]  text-tertiary  md:w-3/5 mt-4 md:mt-12">
              {GLOSSARY.FOOTER.OVERVIEW}
            </p>
          </div>
     
          <img src={FooterShape}  alt="logo" className="md:block hidden h-[200px] w-[250px] object-contain flex-shrink-0 mr-2" />
        </div>
        <hr className="my-12" />
        <div className="flex items-center gap-x-4">
          <YoutubeIcon stroke="#1C81AC" fill="#1C81AC" />
          <XIcon stroke="#1C81AC" fill="#1C81AC" />
          <p className="flex-auto text-left text-xs md:text-sm ">
            {" "}
            {GLOSSARY.FOOTER.COPYRIGHTS}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
