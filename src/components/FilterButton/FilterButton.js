import React from 'react';

const FilterButton = ({isFilterEnable, callback}) => {
    return (
        <button className={isFilterEnable ?'bg-teal-500': 'bg-amber-300'} onClick={callback}>
            {isFilterEnable ? 'ВКЛ' : 'ВЫКЛ'}
        </button>
    );
};

export default FilterButton;