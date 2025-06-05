import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
console.log(Dashboard);
const renderDashboard = (htmlElement) => {
  const app = createApp(Dashboard);
  app.mount(htmlElement);
  console.log("test");
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_local-dashboard");

  if (element) {
    renderDashboard(element);
  }
}

export { renderDashboard };
