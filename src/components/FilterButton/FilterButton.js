import React from 'react';

const FilterButton = ({isFilterEnable, callback}) => {
    return (
        <button onClick={callback}>
            {isFilterEnable ? 'ВКЛ' : 'ВЫКЛ'}
        </button>
    );
};

export default FilterButton;