import React, {Component} from 'react';
import {Link} from "react-router-dom";
import nav from "./nav.conf";
import "../styles/common.css";
import "../styles/shop.css";

class Nav extends Component{
    render() {
        return (
            <div>
                <ul id="nav">
                    {nav.map((l, i) => (
                        <li key={i}>
                            <Link to={l.path}> {l.name} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Nav;