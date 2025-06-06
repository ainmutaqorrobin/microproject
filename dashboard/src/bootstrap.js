import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
const renderDashboard = (htmlElement) => {
  const app = createApp(Dashboard);
  app.mount(htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_local-dashboard");

  if (element) {
    renderDashboard(element);
  }
}

export { renderDashboard };
