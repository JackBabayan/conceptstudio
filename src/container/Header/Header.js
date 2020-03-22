import React from 'react';
import styles from './style.module.scss';
import Logo from '../../assets/img/logo.svg'
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    render(){
        return(
            <header>
                <div className="row align-justify">
                    <div className="column small-6">
                        <Link to="/Home" className={styles.Logo}>
                            <img src={Logo} alt={Logo}/>
                        </Link>
                    </div>
                    <div className="column small-6 medium-3">
                        <nav className={styles.Menu}>
                            <ul>
                                <li>
                                    <Link to="/vision">vision</Link>
                                </li>
                                <li>
                                    <Link to="/about us">about us</Link>
                                </li>
                                <li>
                                    <Link to="/blog">blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;
