import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import menu from '../../resources/img/menu.png';
import '../../resources/css/Common/header.css';

const header=() =>{
    return (
        <header>
            <div className= "mobile">
                <img src={menu} width={50} height={50}/>
            </div>
        </header>
    )
        ;
}

export default header;