import 'primeicons/primeicons.css';
import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function NavBar() {
    return (
        <>
        <div className='NavBar'>
          <Link to='#' className='menu-bars'>
            <i className="pi pi-bars" style={{ 'fontSize': '1em', color: '#fff' }} ></i>
          </Link>
        </div>
            <nav className={'nav-menu active'}>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar
