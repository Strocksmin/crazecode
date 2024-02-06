import React from 'react';

type FilterButtonProps = {
    text: string,
    children: string,
    selected: boolean,
    onClick: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = (props) => {

    const {
        text,
        onClick,
        selected
    } = props;

    return (<button className={selected ? 'dropdown-button-clicked' : 'dropdown-button'}
        onClick={() => onClick()}
        
    >
        {text}
    </button>)
}
export default FilterButton;