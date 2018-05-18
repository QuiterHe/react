import React, {Component} from 'react';
import {Link} from "react-router-dom";
import nav from "./nav.conf";
import "../styles/common.css";
import "../styles/shop.css";
import "../styles/nav.css";


import {Icon, Input} from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;


class Nav extends Component{
    render() {
        return (
            <div>
                <ul id="navigation" className="navigation">
                    {nav.map((l, i) => (
                        <li key={i}>
                            <Link to={l.path}> {l.name} <Icon type={l.icon}/></Link>
                        </li>
                    ))}
                    <li>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </li>

                </ul>

            </div>
        );
    }
}

export default Nav;