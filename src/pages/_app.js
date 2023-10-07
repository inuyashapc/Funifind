import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/style.css";
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../vendor/chartist/css/chartist.min.css";
import { StoreProvider } from "../store";
export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}
