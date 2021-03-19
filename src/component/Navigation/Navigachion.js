import React from 'react'
//import { Component } from 'react';
//import { NavLink } from 'react-router-dom';
//import router from '../../routes';
//import styleNav from './stylesNav.module.css'

import MenuNav from './MenuNav/MenuNav'
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
import styles from './styles.module.css'

const Navigation = ({ isAuthenticated }) => (
  <ul className={styles.ulConteiner}>
    <MenuNav />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </ul>
)

export default Navigation
