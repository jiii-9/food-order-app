import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/* class이름에 -가 있으면 점표기법을 사용할 수 없다. */}
        <img src={mealsImage} alt="A table full of deliciout food!" />
      </div>
    </Fragment>
  );
};

export default Header;
