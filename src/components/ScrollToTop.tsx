import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // wait till page renders
    setTimeout(() => {
      const main = document.querySelector("main");
      if (main) {
        main.scrollTo(0, 0);
      }
      window.scrollTo(0, 0);
    }, 50);
  }, [pathname]);

  return null;
}
