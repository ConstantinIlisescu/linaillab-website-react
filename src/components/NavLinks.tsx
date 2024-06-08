import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="space-x-4 hidden md:block w-full text-right text-cyan-400 min-w-fit">
      {routes.map((route, index) => (
        <Link key={`nav-link-${index}`} to={route.href} className="font-medium">
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
