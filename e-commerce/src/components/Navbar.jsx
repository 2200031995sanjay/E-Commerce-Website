import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full length-half bg-[#6B0F1A] text-[#DCE0D9] p-4 shadow-md z-10">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-[#DCE0D9] hover:text-white transition duration-300">
          E-Commerce
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300">
            Home
          </Link>
          {user && (
            <Link to="/cart" className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300">
              Cart
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin" className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300">
              Admin
            </Link>
          )}

          {/* Authentication Buttons */}
          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#6B0F1A] transition duration-300">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
