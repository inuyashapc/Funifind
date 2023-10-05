import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/style.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
