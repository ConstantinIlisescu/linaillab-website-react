import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return <div>ContactMe</div>;
};

export default ContactMe;
