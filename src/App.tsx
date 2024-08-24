import { AppRoutes } from "./routes";
import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizzashop Ignite" />
      <AppRoutes />
      <Toaster richColors />
    </HelmetProvider>
  );
}
