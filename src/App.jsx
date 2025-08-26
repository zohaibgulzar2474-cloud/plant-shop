import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Header from "./components/Header.jsx";


export default function App() {
const location = useLocation();
const showHeader = ["/products", "/cart"].includes(location.pathname);


return (
<div className="app">
{showHeader && <Header />}
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/products" element={<Products />} />
<Route path="/cart" element={<Cart />} />
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</div>
);
}