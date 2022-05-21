import React from 'react';
import {ReactSVG} from "react-svg";
import trashSvg from '../../assets/Trash.svg'
import './DeleteButton.css'

const DeleteButton = ({callback}) => {
    return (
        <button className={'delButton'} onClick={callback}>
            <ReactSVG className={'trash'} src={trashSvg}/>
        </button>
    );
};

export default DeleteButton;