import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import Disclaimer from "./pages/Disclaimer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/mentions-legales"} component={MentionsLegales} />
      <Route path={"/politique-confidentialite"} component={PolitiqueConfidentialite} />
      <Route path={"/politique-cookies"} component={PolitiqueCookies} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
