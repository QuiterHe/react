import React, {Component} from 'react';
import Nav from "../nav/Nav";
import {Link} from "react-router-dom";
import "../styles/shop.css";
import {findAll} from "../../mock/goods";

class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
        };
    }
    render() {
        return (
            <div id="shop-list">
                <Nav></Nav>
                <ul id="shop-list-each">
                    {findAll().map( (g, i) => (
                        <li key={i}>
                            <Link to={"/shop/" + g.id}>
                                <div className="shop-img"><img src={g.img} alt=""/></div>
                                <div className="shop-detail">{g.name}</div>
                            </Link>
                        </li>
                    ) )}
                </ul>
            </div>

        );
    }
}


export default Shop;