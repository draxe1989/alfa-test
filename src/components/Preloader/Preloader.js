import React from 'react';
import { useSelector} from "react-redux";

const Preloader = () => {
    const imageCounter = useSelector(state => state.cards.imageCounter)
    const numberOfImage = useSelector(state => state.cards.numberOfImagesAtPage)
    const firstLoading = useSelector(state => state.cards.firstLoading)


    return <>
        {(firstLoading && (imageCounter !== numberOfImage)) ?
            <div className={'z-50 fixed h-screen w-screen bg-slate-800 flex items-center justify-center'}>
                <div className={'border border-black border-t-slate-800 border-8  h-60 w-60 animate-spin rounded-full flex justify-center items-center text-6xl text-amber-700'}>
                    Loading
                </div>
            </div>
            : null}
    </>

};

export default Preloader;