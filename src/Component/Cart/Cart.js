import React, { useEffect, useState } from 'react';
import bike from '../../images/Frame.png'
import car from '../../images/Frame-1.png'
import bas from '../../images/Frame-2.png'
import train from '../../images/Group.png';
import './Cart.css';
import { useHistory } from 'react-router';


const Cart = (props) => {
    // console.log(props);
    const {name,img,id}= props.name;

    const history = useHistory();
    const handelClick=(id)=>{
        history.push(`/destination/${id}`)
    }
    return (
        <div className="cart">
            
            <img className="img" src={img} alt=""/>
            <h4>{name}</h4>
            <button onClick={()=>handelClick(id)}>Go Now</button>
        </div>
    );
};

export default Cart;