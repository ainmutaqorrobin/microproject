import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/marketingApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
