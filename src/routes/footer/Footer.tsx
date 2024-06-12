import "./Footer.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-bg-img pt-20 pb-16">
      <div className="max-w-72 mx-auto flex flex-col gap-4">
        <a
          href="https://www.google.co.uk/maps/place/L.I.+Nail+Lab/@52.7133641,-2.0100792,20.33z/data=!4m6!3m5!1s0x487a75a2a6cc418d:0x5b39d3cff4554809!8m2!3d52.7133059!4d-2.0101691!16s%2Fg%2F11kt98gnk9?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-400 flex gap-2 ps-12"
        >
          <FaGoogle className="size-8" />
          <p>Google Reviews</p>
        </a>
        <a
          className="text-fuchsia-400 flex gap-2"
          href="https://www.facebook.com/LINailLab/reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="size-8" />
          <p>Facebook Reviews</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
