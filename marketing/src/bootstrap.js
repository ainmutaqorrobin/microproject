import ReactDOM from "react-dom";
import App from "./App";

const renderMarketing = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_local-marketing");

  if (element) {
    renderMarketing(element);
  }
}

export { renderMarketing };
