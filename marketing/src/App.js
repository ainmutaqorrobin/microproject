import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

//to avoid css coalition bug, so renamed the prefix name with different tag
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

function App() {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
