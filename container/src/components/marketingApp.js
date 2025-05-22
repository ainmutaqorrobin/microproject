import { renderMarketing } from "marketingTeam/MarketingApp";
import { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    renderMarketing(ref.current);
  }, []);
  
  return <div ref={ref} />;
};
