import React from "react";
import Button from "../Button";
import cn from "classnames";
import style from "./styles.module.css";
function NavigationButton({ notify, children, selected,className, ...props }) {
  return (
    <Button
      className={cn(
        style.navigationButton,
        selected && style.navigationButtonSelected, className
      )}
      {...props}
    >
      {notify > 0 && <span className={style.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default NavigationButton;
