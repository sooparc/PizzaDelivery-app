import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import pizzaOrderConfirmation from "../../Assets/pizzaOrderConfirmation.jpeg";

const Cart = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (useData) => {
    setIsSubmit(true);
    await fetch(
      "https://pizzaordering-app-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: useData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmit(false);
    setSubmitted(true);
    cartCtx.clearCart();
  };

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckOut && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const submittedModalContent = (
    <React.Fragment>
      <div className={classes.orderConfirmed}>
        <p>THANKS FOR YOUR ORDER !</p>
      </div>
      <div className={classes.pizzaImage}>
        <img src={pizzaOrderConfirmation} alt="pizzaOrder"></img>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmit && !submitted && modalContent}
      {isSubmit && isSubmittingModalContent}
      {!isSubmit && submitted && submittedModalContent}
    </Modal>
  );
};

export default Cart;
