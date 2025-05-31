import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const renderMarketing = (htmlElement, { onNavigate, initialPathname }) => {
  const history = createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);
  if (initialPathname) {
    const { pathname } = history.location;
    if (pathname !== initialPathname) history.push(initialPathname);
  }

  ReactDOM.render(<App history={history} />, htmlElement);

  return {
    onParentNavigate({ pathname: nextPath }) {
      const { pathname } = history.location;
      if (pathname !== nextPath) history.push(nextPath);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_local-marketing");

  if (element) {
    renderMarketing(element, {});
  }
}

export { renderMarketing };
