import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cartSlice.js";


export default function ProductCard({ product }) {
const dispatch = useDispatch();
const items = useSelector(selectCartItems);
const inCart = items.some((i) => i.id === product.id);


return (
<div className="product-card">
<img src={product.image} alt={product.name} />
<div className="info">
<h4>{product.name}</h4>
<p className="price">${product.price.toFixed(2)}</p>
<button
className="btn"
disabled={inCart}
onClick={() => dispatch(addToCart(product))}
title={inCart ? "Already in cart" : "Add to cart"}
>
{inCart ? "Added" : "Add to Cart"}
</button>
</div>
</div>
);
}