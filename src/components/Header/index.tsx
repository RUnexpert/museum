import React, { useState } from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import css from "./style.module.css";
import { nanoid } from "nanoid";

export const Header = () => {
  const menuList = [
    { value: "Visiting", href: "#visiting" },
    { value: "Explore", href: "#explore" },
    { value: "Video", href: "#video" },
    { value: "Gallery", href: "#gallery" },
    { value: "Tickets", href: "#tickets" },
    { value: "Contacts", href: "#contacts" },
  ];

  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logoContainer}>
          <Logo />
          <h1>
            <a className={css.title} href='/#'>
              Louvre
            </a>
          </h1>
        </div>

        <nav className={css.nav}>
          <ul className={css.list}>
            {menuList.map((item) => (
              <li className={css.item} key={nanoid()}>
                <a href={item.href} className={css.link}>
                  {item.value}
                </a>
              </li>
            ))}

            <div
              className={menuActive ? `${css.burgerBtn} ${css.open}` : css.burgerBtn}
              onClick={(e) => {
                e.stopPropagation();
                setMenuActive(!menuActive);
              }}
            >
              <span className={css.burger}></span>
            </div>
          </ul>
        </nav>
      </div>
      <Menu active={menuActive} menu={menuList} setActive={setMenuActive} />
    </header>
  );
};
