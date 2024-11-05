import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // console.log('Hellooooooo') Removed this linee
  return <Component {...pageProps} />;
}
