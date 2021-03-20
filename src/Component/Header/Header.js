import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import nameData from '../FakeData/Fakedata.json'
import './Header.css'


const Header = () => {

    const [names, setNames] = useState([]);
    // console.log(names)
    useEffect(() => {
        setNames(nameData);
    }, [])
    return (
        <div >
           
            <nav className="nav">
            <h3>Hello Rider</h3>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="">Contact</Link>
                    </li>
                    <li style={{backgroundColor:"#d72323",padding:"8px",borderRadius:'3px',color:'#fff',textDecoration:'none'}}>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
       <div style={{display:'flex',justifyContent:'center'}}>
       {
           names.map(name => <Cart name={name}></Cart>)
       }
       </div>

        </div>
    );
};

export default Header;