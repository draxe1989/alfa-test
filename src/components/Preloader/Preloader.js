import React from 'react';
import { useSelector} from "react-redux";
import s from './Preloader.module.css'

const Preloader = () => {
    const imageCounter = useSelector(state => state.cards.imageCounter)
    const numberOfImage = useSelector(state => state.cards.numberOfImagesAtPage)
    const firstLoading = useSelector(state => state.cards.firstLoading)


    return <>
        {(firstLoading && (imageCounter !== numberOfImage)) ?
            <div className={s.preloader}>
                <div>
                    Loading
                </div>
            </div>
            : null}
    </>

};

export default Preloader;