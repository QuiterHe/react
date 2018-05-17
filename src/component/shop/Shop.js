import React, {Component} from 'react';
import Nav from "../nav/Nav";
import {Link} from "react-router-dom";
import "../styles/shop.css";
import {findAll} from "../../mock/goods";
import { connect } from 'react-redux';
import {getGoodsList} from "../../redux/action";

import "../../redux/action";
import {APP_START, appStatus} from "../../redux/action";

class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
        };
    }

    componentDidMount() {
        this.props.getGoodsList();
        console.log("DidMount");
    }

    render() {
        console.log("Data=======B");
        console.log(this.props.goodsList.goods);
        console.log("Data=======E");
        if(!this.props.goodsList.goods) {
            return <h1>
                Empty
            </h1>
        }
        return (
            <div id="shop-list">
                <Nav></Nav>
                    <div className="shop-items">
                        {this.props.goodsList.goods.data.map( (g, i) => (
                            <Link to={"/shop/" + g.id} className="shop-item" key={i}>
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

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    status: state.getAppStatus,
    goodsList: state.getGoodsList,
});

const mapDispatchToProps = (dispatch) => ({
    getGoodsList:()=> dispatch(getGoodsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
