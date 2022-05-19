import React from 'react';

const FilterButton = ({isFilterEnable, callback}) => {
    return (<div className={'sticky top-0 left-0 p-8 z-40 w-full bg-amber-600 flex justify-center items-center'}>
            <button
                className={'text-6xl font-black text-slate-700'}
                onClick={callback}
            style={{fontFamily: "breakingBad"}}>
                Press to <span className={'transition-all border border-slate-700 p-2 rounded-lg hover:bg-amber-500'}>{isFilterEnable ? 'Show Al' : 'Show Lked'}</span>
            </button>
    </div>
    );
};

export default FilterButton;