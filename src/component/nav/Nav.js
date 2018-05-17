import React, {Component} from 'react';
import {Link} from "react-router-dom";
import nav from "./nav.conf";
import "../styles/common.css";
import "../styles/shop.css";
import "../styles/nav.css";

class Nav extends Component{
    render() {
        return (
            <div>
                <ul id="navigation" className="navigation">
                    {nav.map((l, i) => (
                        <li key={i}>
                            <Link to={l.path}> {l.name} </Link>
                        </li>
                    ))}
                    <li>
                        <div className="search">
                            <form action="">
                                <input type="text" name="" id="search"/>
                                <div id="svg-warpper">
                                    <svg id="sousuo" viewBox="0 0 1024 1024"><path d="M768.92565 687.127141l0.879367 0.867797 237.255593 237.255593c22.585853 22.585853 22.585853 59.212655 0 81.804294-22.597424 22.591638-59.224226 22.591638-81.815864 0l-237.255593-237.255593c-0.289266-0.289266-0.578531-0.578531-0.862012-0.879368-71.917198 54.746395-161.682079 87.242486-259.043073 87.242486C191.661559 856.168136 0 664.512362 0 428.089853S191.661559 0 428.084068 0c236.422508 0 428.084068 191.661559 428.084068 428.084068 0 97.360994-32.501876 187.125876-87.242486 259.043073z m-340.841582 53.340565c172.523751 0 312.383638-139.859887 312.383638-312.383638s-139.859887-312.383638-312.383638-312.383639-312.383638 139.859887-312.383639 312.383639 139.859887 312.383638 312.383639 312.383638z"></path></svg>
                                </div>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;