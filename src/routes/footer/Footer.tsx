import "./Footer.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-bg-img pt-20 pb-16 lg:pt-36">
      <div className="max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-6xl mx-auto flex flex-col gap-4">
        <a
          href="https://www.google.co.uk/maps/place/L.I.+Nail+Lab/@52.7133641,-2.0100792,20.33z/data=!4m6!3m5!1s0x487a75a2a6cc418d:0x5b39d3cff4554809!8m2!3d52.7133059!4d-2.0101691!16s%2Fg%2F11kt98gnk9?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-400 flex gap-2 ms-12 w-fit items-center"
        >
          <FaGoogle className="size-8" />
          <p>Google Reviews</p>
        </a>
        <a
          className="text-fuchsia-400 flex gap-2 w-fit items-center"
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
