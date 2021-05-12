import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import styles from './Cart.module.css';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const checkoutHandler = () => {
    setIsCheckout((prevState) => !prevState);
  };

  const confirmOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://feast-582d8-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        items: ctx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

  const hasItems = ctx.items.length > 0;
  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const modalActions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={confirmOrderHandler} onCancel={checkoutHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const succesContent = (
    <>
      <p>Order placed succesfully</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && <p>Placing your order...</p>}
      {didSubmit && succesContent}
    </Modal>
  );
};

export default Cart;
