import { useReducer } from "react";
import { Link, NavLink, useNavigate, useNavigation } from "react-router";
import { GLOSSARY } from "~/lib/glossary";
import { ChevronDown, X, Menu } from "lucide-react";
import NasaqLogo from "~/assets/icons/nasaq-header.svg"
import LoadingOverlay from "./loading-overlay";
import { cn } from "~/lib/tw-merge";
import { Button } from "./ui/button";

export type NavElement = {
  id: string;
  arabicLabel: string;
  link: string,
  visibility: boolean;
  onClick?: () => void;
  children?: NavElement[];
};

export const NavbarElements: NavElement[] = [
  { 
    id: "about",
    arabicLabel: GLOSSARY.HEADER.NAVBAR.ABOUT, 
    link: "/",
    visibility: true,
    onClick() {},
  },
  {
    id: "registeration",
    arabicLabel: GLOSSARY.HEADER.NAVBAR.CONDITIONS, 
    link: "/",
    visibility: true,
    onClick() {},
  },
  {
    id: "levels",
    arabicLabel: GLOSSARY.HEADER.NAVBAR.LEVELS, 
    link: "/",
    visibility: true,
    onClick() {},
  },
  {
    id: "contact-us",
    arabicLabel: GLOSSARY.HEADER.NAVBAR.CONTACT_US, 
    link: "/",
    visibility: true,
    onClick() {},
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [isMenuOpen, toggleMenu] = useReducer((st) => !st, false);

  const DisplayedNavList = () => (
    <ul className="flex flex-col md:flex-row gap-x-8 gap-y-8">
      {NavbarElements.map((element) => (
        <li
          key={element.id}
          className="flex cursor-pointer font-bold text-primary hover:text-primary/70"
        >
          <NavLink
            prefetch="intent"
            to={element.link}
            className="flex items-center"
          >
            <span>{element.arabicLabel}</span>
            {element.children && element.children.length && (
              <ChevronDown size="sm" className="mr-1" />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="z-50 fixed w-full h-12 md:h-16 bg-white/95 flex items-center justify-between py-2 lg:px-32 px-3">
     
      <div className="md:hidden">
        {isMenuOpen 
          ? <X className="p-2 hover:bg-black/5 transition-all" size={40} onClick={toggleMenu}/>
          : <Menu className="p-2 hover:bg-black/5 transition-all" size={40} onClick={toggleMenu}/>
        }
      </div>
      <div className="flex gap-x-12 items-center">


      <Link to="/">
        <img
          className="h-8 w-8 hidden md:block md:h-auto md:w-auto"
          src={NasaqLogo}
          alt="logo"
        />
      </Link>
      <div
        className={cn(
          "md:bg-transparent bg-white/95 md:h-auto h-[60vh] md:w-fit md:max-w-full max-w-[300px] w-2/3 md:rounded-none md:p-0 p-5 rounded-l-lg md:static absolute top-12 right-0",
          "transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        )}
      >
        <DisplayedNavList />
      </div>
      </div>




      <Button variant={"secondary"} className="text-white">{GLOSSARY.HEADER.JOIN_BUTTON}</Button>
      
      {navigation.state === "loading" && <LoadingOverlay message="جاري التحميل"/>}
    </nav>
  );
};

export default Navbar;