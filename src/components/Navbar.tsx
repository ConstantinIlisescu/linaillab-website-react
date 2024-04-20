import { Link } from "react-router-dom";
import Container from "./ui/container";
import { routes } from "@/constants/routes";

const Navbar = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 border-b">
      <Container>
        <div className="relative flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link to="/">LOGO</Link>
          </div>
        </div>
        {/* large screens nav links */}
        <nav className="items-center space-x-4 hidden md:block">
          {routes.map((route, index) => (
            <Link
              key={`nav-link-${index}`}
              to={route.href}
              className="text-sm font-medium transition-colors"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
