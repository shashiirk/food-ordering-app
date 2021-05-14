import { useRef } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const inputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      return;
    }

    inputRef.current.value = '1';
    inputRef.current.blur();
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          defaultValue: '1',
        }}
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
