import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveDigits = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    number: true,
    street: true,
    city: true,
    zipcode: true,
  });

  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const zipcodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredZipcode = zipcodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredNumberIsValid = !isEmpty(enteredNumber);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipcodeIsValid = isFiveDigits(enteredZipcode);

    setFormInputValidity({
      name: enteredNameIsValid,
      number: enteredNumberIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      zipcode: enteredZipcodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredNumberIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredZipcodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      number: enteredNumber,
      street: enteredStreet,
      city: enteredCity,
      zipcode: enteredZipcode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const numberControlClasses = `${classes.control} ${
    formInputValidity.number ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const zipcodeControlClasses = `${classes.control} ${
    formInputValidity.zipcode ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={numberControlClasses}>
        <label htmlFor="name">Mobile number</label>
        <input type="text" id="mobile" ref={numberInputRef}></input>
        {!formInputValidity.number && (
          <p>Please enter a valid mobile number.</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={zipcodeControlClasses}>
        <label htmlFor="zipcode">Zip code</label>
        <input type="text" id="zipcode" ref={zipcodeInputRef}></input>
        {!formInputValidity.zipcode && (
          <p>Please enter a valid zip code (5 Characters long).</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
