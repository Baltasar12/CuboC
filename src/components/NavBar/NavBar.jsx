import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import { Button } from './Button';
import {Cart} from './CartWidget'
import './NavBar.css'

class Navbar extends Component{
    state = { clicked: false }//Es como un constructor pero de forma más corta
    //Lo que hace la clase del 'i' que está en el div sirve para el "menú de hamburguesa"

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})//Para que cambie al valor opuesto
    }


    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">CUBO <i className="fab fa-react"></i> </h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
            <Cart></Cart>
            <Button>Sing Up</Button>
            </nav>
        );
    }
}


export default Navbar