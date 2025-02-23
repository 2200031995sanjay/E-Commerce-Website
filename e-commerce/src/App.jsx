import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { user, isAdmin } = useAuth() || {}; // Prevent undefined issues

  return (
    <div className="bg-[#F0F7F4] text-[#042A2B] min-h-screen">
      <Router>
        <CartProvider>
          <Navbar />
          <div className="p-4"> {/* Added padding for better spacing */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
              <Route path="/admin" element={user && isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
