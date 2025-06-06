import { renderDashboard } from "dashboardTeam/DashboardApp";
import { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    renderDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
};
