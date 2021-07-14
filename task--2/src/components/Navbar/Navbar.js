import React from 'react';
import Button from '@material-ui/core/Button'
import { Menuitem } from "./Menuitem"
import './Navbar.css'


   

    const Navbar = ({onButtonSubmit}) =>{
            return(
                 <nav className="Navbar-items">
                    <h1 className="Nav-logo">WWW
                        <i className="far fa-file-word">
                        </i>
                    </h1>
               
                   
                     <ul className="nav-menu">
                        {Menuitem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                         );
                     })}

                    </ul>
                    <Button variant="contained" color="#fff" onClick={onButtonSubmit} >
                        User-Data
                    </Button>
                </nav>


               
            );
                    }
            

export default Navbar