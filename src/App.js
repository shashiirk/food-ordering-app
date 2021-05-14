import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  if (cartIsShown) {
    document.body.style = 'overflow-y: hidden';
  } else {
    document.body.style = '';
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className="main">
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
