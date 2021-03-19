import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import router from '../../routes';
import styleNav from './stylesNav.module.css'
//import Modal from '../Modal/Modal'

class MenuNav extends Component{
/*state = {
    shovModal: false,

  };
    toggleModalCloseOpen = (e) => {
    //const largeImageURL = e.target.dataset.sourse
    this.setState((state) => ({ showModal: !state.showModal, <Modal/>}))
  }
*/
    render() {
       
        return (
            <div>
                <NavLink
                   to='/'
                    exact
                    className={styleNav.link}
                    activeClassName={styleNav.activeLink}
                    //onClick={this.toggleModalCloseOpen}
                >
                    Главная
        </NavLink>
        
                <NavLink
                    to='/contacts'
                    exact
                    className={styleNav.link}
                    activeClassName={styleNav.activeLink}
                    //onClick={this.toggleModalCloseOpen}
                >
                    Телефонный справочник
        </NavLink>
            </div>
        )
    }
};
export default MenuNav;