import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import map from '../../images/Map.png';
import './Destination.css'

const Destination = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [destiny, setDestiny] = useState({
        from: '',
        to: '',

    })
    const handelBlur = (e) => {
        const newUserInfo = { ...destiny };
        newUserInfo[e.target.name] = e.target.value;
        setDestiny(newUserInfo);
    }
    const handelSubmit = (event) => {
        if (destiny.from && destiny.to) {
            const newUserInfo = { ...destiny };

            setDestiny(newUserInfo);
        }
        event.preventDefault();
    }
    return (
        <div style={{display:"flex"}}>
            {/* <h2>This is Destination {id}</h2> */}

            <h2>{loggedInUser.name}</h2>
            <div className="name">
                <form onSubmit={handelSubmit}>
                    <h5>Pick from</h5>

                    <input type="text" onBlur={handelBlur} name="from" id="" required />
                    <h5>Pick to</h5>
                    <input type="text" onBlur={handelBlur} name="to" id="" required />
                    <br />
                    <input type="submit" value="Search" />
                </form>
                {destiny.from && destiny.to && <h5>Happy Riding</h5>}
            </div>
            <div className="map">
                <img src={map} alt=""/>
            </div>
        </div>
    );
};

export default Destination;