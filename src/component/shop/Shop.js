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

                    {findAll().map( (g, i) => (
                        <Link to={"/shop/" + g.id}>
                            <div className="container">
                                <div className="img-container">
                                    <img src={g.img} alt="" className="img-img" />
                                </div>
                                <div className="detail">
                                    <div className="name">
                                        {g.name}
                                    </div>
                                    <div className="express">
                                        <span style={{border:"1px solid orange", borderRadius: "2px", color: "orange"}}>包邮</span>
                                    </div>
                                    <div className="price" style={{color:"red"}}>
                                        ￥{g.price}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) )}

            </div>

        );
    }
}


export default Shop;