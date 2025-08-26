import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  increment,
  decrement,
  removeItem,
} from "../features/cartSlice.js";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalCount = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);

  return (
    <main className="container cart-page">
      <h1>Your Cart</h1>

      <div className="cart-summary">
        <div>
          Total items: <strong>{totalCount}</strong>
        </div>
        <div>
          Total cost: <strong>${totalCost.toFixed(2)}</strong>
        </div>
      </div>

      {items.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Continue shopping</Link>.
        </p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-row" key={item.id}>
                <img className="thumb" src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-controls">
                    <button
                      onClick={() => dispatch(decrement(item.id))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increment(item.id))}>
                      +
                    </button>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button
              className="checkout-btn"
              onClick={() => alert("Coming Soon!")}
            >
              Checkout
            </button>
            <Link className="continue-btn" to="/products">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
