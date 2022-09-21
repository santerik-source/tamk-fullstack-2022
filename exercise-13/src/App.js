
import ItalyPage from "./pages/Italy";
import BrazilPage from "./pages/Brazil";
import FinlandPage from "./pages/Finland";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path="/" exact>
        <FinlandPage />
      </Route>
      <Route path="/italy">
        <ItalyPage   />
      </Route>
      <Route path="/Brazil">
        <BrazilPage   />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
