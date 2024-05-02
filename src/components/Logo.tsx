import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="flex items-center border-2 border-cyan-500 px-2 py-1">
        <Link to="/" className="text-1xl text-cyan-500">
          L.I Nail Lab
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
