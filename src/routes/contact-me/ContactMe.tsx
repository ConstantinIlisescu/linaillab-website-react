import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactMe = () => {
  const location = useLocation();
  const { hash, pathname } = location;

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);
  return <div>ContactMe</div>;
};

export default ContactMe;
