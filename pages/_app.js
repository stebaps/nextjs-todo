import "../styles/tailwind.css";
import makeServer from "../mirage/server";

makeServer();

function MyApp({ Component, pageProps }) {
  return (
    <div className="container m-0 max-w-full h-screen md:mx-auto md:max-w-xl">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
