import 'primeicons/primeicons.css'
import './NavBar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';


function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showshidebar = () =>setSidebar(!sidebar);
    return (
        <>
            <div className='NavBar'>
                <Link to='#' className='menu-bars'>
                <i className="pi pi-bars" style={{'fontSize': '1em', color: '#fff'}} onClick={showshidebar}></i>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showshidebar}>
                    <li className='navbar-toogle'>
                        <Link to='#' className='menu-bars'>
                            <i className="pi pi-times" style={{color: '#fff'}}></i>
                        </Link>
                    </li>
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
