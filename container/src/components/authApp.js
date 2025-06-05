import { renderAuth } from "authTeam/AuthApp";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = renderAuth(ref.current, {
      onNavigate: ({ pathname: nextPath }) => {
        const { pathname } = history.location;
        if (pathname !== nextPath) history.push(nextPath);
      },
      initialPathname: history.location.pathname,
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
