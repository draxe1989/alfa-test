import React from 'react';
import {ReactSVG} from "react-svg";
import likeSvg from '../../assets/like.svg'
import s from './LikeButton.module.css'

const LikeButton = ({callback, isLiked}) => {
    return (
        <button className={s.likeButton} onClick={callback}>
            <ReactSVG className={isLiked ? s.withLike: s.withoutLike} src={likeSvg}/>
        </button>
    );
};

export default LikeButton;