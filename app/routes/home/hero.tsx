import TitleBlock from "~/components/title-block";
import { GLOSSARY } from "~/lib/glossary";
import CheckIcon from "~/assets/icons/check.svg?react";
import HeroPath from "~/assets/images/hero-path.svg"

const Hero = () => {
  return (
    <section
      className="min-h-96  px-12 py-32 md:px-28 md:py-28  text-white relative"
      style={{
        background:
          "linear-gradient(96deg, #3EB985 -5.92%, #1C81AC 34%, #233A77 82.8%)",
      }}
    >
        <img src={HeroPath} className="absolute left-12 top-32 blur-sm md:blur-[3px] mix-blend-screen"/>
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">{GLOSSARY.HERO.HEADER}</h1>
      <h4 className="text-lg md:text-xl font-normal mb-12">{GLOSSARY.HERO.DESC}</h4>

      <TitleBlock className="text-2xl md:text-4xl font-bold mb-4" text={GLOSSARY.HERO.TITLE_REG} />
      <ul className="">
      {GLOSSARY.HERO.CONDITIONS.map((conditiion,i) => (
        <li  key ={i} className="flex gap-2 items-start">
          <div className="w-12" >
          <CheckIcon />

          </div>
          <p>{conditiion}</p>
        </li>
      ))}

      </ul>
      
    </section>
  );
};

export default Hero;
