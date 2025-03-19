import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,

} from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar">

      <head>
      <title>  نسق | تسجيل الجمعيات الشبابية</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return   <>
    <iframe 
   src="https://test.jataa-consultation.org/test-nasaq/"
    title="Controlled Form Embed"
    className="h-[99vh]"
    frameBorder="0" 
    style={{ 
      width: "100%",
      maxHeight:"100vh",
      height:"100vh",
      marginBottom:"-5px",

      border: "none"
    }}
    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
  />

</>;
}
// export default function App() {
//   return ( <table className={"h-[]"} border={0} cellSpacing={0} cellPadding={0} id="hold_my_iframe">
//     <iframe   src="https://test.jataa-consultation.org/test-nasaq/" width={"100%"} height={"100%"} ></iframe>
// </table>
//   );}
