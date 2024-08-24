import { AppRoutes } from "./routes";
import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/themeProvider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | Pizzashop Ignite" />
        <AppRoutes />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  );
}
