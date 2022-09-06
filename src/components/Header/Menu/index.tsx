import React from 'react';
import css from './style.module.css';
import { nanoid } from 'nanoid';
import { ClickAwayListener } from '@mui/material';
import { MenuFooter } from '../../Footer/MenuFooter';

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  menu: { value: string; href: string }[];
}

export const Menu: React.FC<Props> = ({ active, setActive, menu }) => {
  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <div className={active ? `${css.menu} ${css.open}` : css.menu}>
        <div className={css.container}>
          <ul className={css.list}>
            {menu.map((item) => (
              <li className={css.item} key={nanoid()}>
                <a
                  href={item.href}
                  className={css.link}
                  onClick={() => setActive(false)}
                >
                  <span>{item.value}</span>
                  <span className={css.icon}>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.33352 5.53176L1.99337 0.191706C1.86985 0.068097 1.70498 0 1.52917 0C1.35337 0 1.18849 0.068097 1.06498 0.191706L0.671718 0.584873C0.415818 0.841066 0.415818 1.25745 0.671718 1.51326L5.15597 5.99751L0.666742 10.4867C0.543231 10.6104 0.475037 10.7751 0.475037 10.9508C0.475037 11.1267 0.543231 11.2915 0.666742 11.4152L1.06001 11.8083C1.18362 11.9319 1.3484 12 1.5242 12C1.7 12 1.86488 11.9319 1.98839 11.8083L7.33352 6.46336C7.45732 6.33936 7.52532 6.1738 7.52493 5.99781C7.52532 5.82112 7.45732 5.65566 7.33352 5.53176Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className={css.images}>
            {/* <img
              className={css.image}
              src="/assets/img/menu_image_1.jpg"
              alt="Palais du Louvre"
              title='Palais du Louvre'
            />
            <img
              className={css.image}
              src="/assets/img/menu_image_2.jpg"
              alt="Musée du Louvre"
              title='Musée du Louvre'
            />
            <img
              className={css.image}
              src="/assets/img/menu_image_3.jpg"
              alt="cour Napoléon"
              title='cour Napoléon'
            /> */}

            <div className={css.image1}  title='Palais du Louvre' />
            <div className={css.image2} title='Musée du Louvre'/>
            <div className={css.image3} title='cour Napoléon' />
          </div>
          <div className={css.line}></div>
          <div className={css.menuFooter}>
            <MenuFooter />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
