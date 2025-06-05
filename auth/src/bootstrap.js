import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const renderAuth = (
  htmlElement,
  { onNavigate, initialPathname, defaultHistory, onSignIn }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({ initialEntries: [initialPathname] });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, htmlElement);

  return {
    onParentNavigate({ pathname: nextPath }) {
      const { pathname } = history.location;
      if (pathname !== nextPath) history.push(nextPath);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_local-auth");

  if (element) {
    renderAuth(element, { defaultHistory: createBrowserHistory() });
  }
}

export { renderAuth };
