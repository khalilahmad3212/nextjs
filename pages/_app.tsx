import "../styles/globals.css";
import "../components/categary/multirangeslider/multiRangeSlider.css";

// for pagination
import "./styles.scss";
import "./pagination.scss";
import type { AppProps } from "next/app";
import CarProvider from "../context/carContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarProvider>
      <Component {...pageProps} />
    </CarProvider>
  );
}