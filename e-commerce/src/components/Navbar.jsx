import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#6B0F1A] text-[#DCE0D9] p-4 flex justify-between shadow-md z-10">
      <Link to="/" className="text-xl font-bold text-[#DCE0D9]">E-Commerce</Link>
      <div className="flex space-x-4">
      <Link to="/" className="hover:text-[#FFFFFF]">Home</Link>
        {user && <Link to="/cart" className="hover:text-[#FFFFFF]">Cart</Link>}
        {isAdmin && <Link to="/admin" className="hover:text-[#FFFFFF]">Admin</Link>}
        {user ? (
          <button onClick={logout} className="hover:text-[#FFFFFF]">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-[#FFFFFF]">Login</Link>
            <Link to="/signup" className="hover:text-[#FFFFFF]">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
