import CategoriesInMenu from "./CategoriesInMenu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Importing clearCart action to clear the cart

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items); // Accessing cart
  return (
    <div className="flex flex-col items-center p-4">
        <button className="bg-red-500 text-black p-2 rounded" onClick={() => dispatch(clearCart())}>clear Cart</button>
        {cartItems.length > 0 ? (
        <div className="mt-4">
          <CategoriesInMenu
            category={{ title: "Cart Items", itemCards: cartItems }}
            expanded={true}
          />
        </div>
      ) : "your cart is empty"}
    </div>
  );
};

export default Cart;