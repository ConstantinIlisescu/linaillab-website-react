import { routes } from "@/constants/routes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import MenuIcon from "@/icons/MenuIcon";

const NavLinksMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 text-center">
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
      </SheetContent>
    </Sheet>
  );
};

export default NavLinksMobile;
