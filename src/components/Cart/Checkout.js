import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {
  const [inputFieldsState, setInputsFieldState] = useState({
    name: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isEmpty(enteredPostal);

    setInputsFieldState({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredCityIsValid & enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          inputFieldsState.name ? '' : styles.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!inputFieldsState.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${styles.control} ${
          inputFieldsState.city ? '' : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!inputFieldsState.city && <p>Please enter a valid city</p>}
      </div>
      <div
        className={`${styles.control} ${
          inputFieldsState.postal ? '' : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!inputFieldsState.postal && <p>Please enter a valid postal</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
