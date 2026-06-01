import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Destinations from "./pages/Destinations/Destinations";
import DestinationDetails from './pages/Destinations/DestinationDetails';
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Dashboard from './pages/Admin/Dashboard';
import AdminLogin from './pages/Admin/AdminLogin';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;