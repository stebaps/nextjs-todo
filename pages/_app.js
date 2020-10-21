import "../styles/tailwind.css";
import makeServer from "../mirage/server";

makeServer();

function MyApp({ Component, pageProps }) {
  return (
    <div className="container m-0 md:mx-auto md:max-w-5xl md:mt-5">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
