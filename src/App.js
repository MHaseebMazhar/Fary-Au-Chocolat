import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import CartPage from "./pages/CartPage/CartPage";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AdminApp from "./admin/AdminApp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/*" element={<AdminApp />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
