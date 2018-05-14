import React, {Component} from 'react';
import {Link} from "react-router-dom";
import nav from "./nav.conf";

class Nav extends Component{
    render() {
        return (
            <ul>
                {nav.map((l, i) => (
                    <li key={i}>
                        <Link to={l.path}> {l.name} </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Nav;