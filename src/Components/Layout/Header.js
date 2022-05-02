import { Fragment } from "react";
import pizzaImg from "../../Assets/pizza.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import logo from "../../Assets/logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImg} alt="pizza" />
      </div>
    </Fragment>
  );
};

export default Header;
