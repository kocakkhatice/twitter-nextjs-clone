import React from "react";
import Button from "../Button";
import cn from "classnames";
import style from "./styles.module.css";

function TweetButton({ biggerButton = false,  children, className, ...props }) {
  return (
    <Button className={cn(style.tweetButton,biggerButton && style.biggerButton, className)} {...props}>
      {children}
    </Button>
  );
}

export default TweetButton;
