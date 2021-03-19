import React from 'react';
import Header from '../Header/Header';
import header from '../../images/Bg.png'

const Home = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,justifyContent:'center',}}>
            <Header></Header>
        </div>
    );
};

export default Home;