import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cartSlice.js";


export default function Header() {
const count = useSelector(selectCartCount);
const { pathname } = useLocation();


return (
<header className="header">
<div className="brand">GreenLeaf Plants</div>
<nav className="nav">
<Link to="/products" className={pathname === "/products" ? "active" : ""}>
Products
</Link>
<Link to="/cart" className={pathname === "/cart" ? "active" : ""}>
<span role="img" aria-label="cart">🛒</span>
<span className="cart-count">{count}</span>
</Link>
</nav>
</header>
);
}