import React from "react";
import ReactDom from "react-dom";

const renderMarketing = (htmlElement) => {
  ReactDom.render(<h1>This is marketing app!</h1>, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#local-marketing");

  if (element) {
    renderMarketing(element);
  }
}

export { renderMarketing };
