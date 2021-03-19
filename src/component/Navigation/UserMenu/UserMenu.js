import React from 'react';
import styleUserMenu from './styleUserMenu.module.css';



export default function UserMenu() {
  

  return (
    <div className={styleUserMenu.container}>
      <span className={styleUserMenu.name}>Добро пожаловать </span>
      <button type="button" >
        Выйти
      </button>
    </div>
  );
};

