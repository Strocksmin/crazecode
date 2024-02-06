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

    return (<button className='dropdown-button'
        onClick={() => onClick()}
        style={{ backgroundColor: selected ? '#f5f' : 'grey' }}
    >
        {text}
    </button>)
}
export default FilterButton;