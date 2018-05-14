import React, {Component} from 'react';
import Nav from "../nav/Nav";
import {Link} from "react-router-dom";
import {findOne} from "../../mock/goods";


class ShopDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
        };
    }
    render() {
        let good = findOne(this.state.id);
        return good && (
            <div>
                <Nav></Nav>
                <ul>
                    <li>ID:{good.id}</li>
                    <li>NAME: {good.name}</li>
                    <li>PRICE: {good.price}</li>
                </ul>
            </div>
        );
    }
}


export default ShopDetail;