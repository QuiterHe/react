import React, {Component} from 'react';
import Nav from "../nav/Nav";
import {Link} from "react-router-dom";

const GoodsAPI = [
    {
        id: 1,
        name: "夏季新款男装长裤NIANJEEP商务休闲裤男士西裤直筒宽松纯棉男裤子",
        price: 76.00
    },
    {
        id: 2,
        name: "秋季新款NIANJEEP户外速干夹克男青年休闲大码外套薄款冲锋夹克男",
        price: 148.00
    },
    {
        id: 3,
        name: "NIANJEEP/吉普盾2018春季新款男士休闲外套大码宽松夹克男衣服",
        price:  138.00
    },
];

class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
        };
    }
    render() {
        return (
            <div>
                <Nav></Nav>
                <ul>
                    {GoodsAPI.map( (g, i) => (
                        <li key={i}><Link to={"/shop/" + g.id}>{g.name} </Link></li>
                    ) )}
                </ul>
            </div>

        );
    }
}


export default Shop;