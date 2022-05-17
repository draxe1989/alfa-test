import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {disableFilterAction, enableFilterAction} from "../../store/cardsReducer";
import FilterButton from "./FilterButton";

const FilterButtonContainer = () => {
    const isFilterEnable = useSelector(state => state.cards.isFilterEnable)
    const dispatch = useDispatch();
    const toggleFilter = () => {
        dispatch(isFilterEnable ? disableFilterAction() : enableFilterAction())
    }

    return (
        <FilterButton isFilterEnable={isFilterEnable} callback={toggleFilter}/>
    );
};

export default FilterButtonContainer;