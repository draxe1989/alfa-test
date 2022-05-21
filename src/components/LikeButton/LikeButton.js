import React from 'react';
import {ReactSVG} from "react-svg";
import likeSvg from '../../assets/like.svg'
import './LikeButton.css'

const LikeButton = ({callback, isLiked}) => {
    return (
        <button className={'likeButton'} onClick={callback}>
            <ReactSVG className={isLiked ? ' withLike': ' withoutLike'} src={likeSvg}/>
        </button>
    );
};

export default LikeButton;