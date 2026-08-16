import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import CartPage from "./pages/CartPage/CartPage";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
