import Cart from "../components/Cart"

export default function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      <Cart cart={cart} removeFromCart={removeFromCart} />

      {cart.length > 0 && (
        <h3>Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  )
}
