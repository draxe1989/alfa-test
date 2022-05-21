import React from 'react';
import {ReactSVG} from "react-svg";
import trashSvg from '../../assets/Trash.svg'
import s from './DeleteButton.module.css'

const DeleteButton = ({callback}) => {
    return (
        <button className={s.delButton} onClick={callback}>
            <ReactSVG src={trashSvg}/>
        </button>
    );
};

export default DeleteButton;