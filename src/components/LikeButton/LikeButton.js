import React from 'react';
import {ReactSVG} from "react-svg";
import likeSvg from '../../assets/like.svg'
import './LikeButton.css'

const LikeButton = ({callback}) => {
    return (
        <button className={''} onClick={callback}>
            <ReactSVG className={'h-12 w-12'} src={likeSvg}/>
        </button>
    );
};

export default LikeButton;