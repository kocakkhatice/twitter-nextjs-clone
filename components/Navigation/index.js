import React from "react";
import NavigationButton from "../NavigationButton";
import {MENU} from '../../constants'
import TextTitle from "../TextTitle";
import style from "./styles.module.css";

function Navigation({ flat = false, selectedNav='home' }) {
  return (
    <nav className={style.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat &&  menu.title.length > 0;
        const selected = selectedNav === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selectedNav === menu.key}
            href={menu.path}
            className={style.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
