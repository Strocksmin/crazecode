import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FilterButton from './FilterButton';

type FilterProps = {
    onFilterChange: (currentFilter: string) => void,
    title: string,
    content: string[],
    filters: number[],
    onSetFilterArray: (filtersArray: number[]) => void;
};

let list: number[] = [];

const Filter:React.FC<FilterProps> = (props) => {
    const {
        title,
        content,
        onFilterChange,
        filters,
        onSetFilterArray
    } = props;


    const [isActive, setActive] = useState(false);

    const clickHandler = () => {
        setActive(isActive => { return !isActive});
    }

    const [selected, isSelected] = useState(false);

    const [isFiltered, setFilter] = useState(false);

    let defFilter:number = 0;


    function toggleStyle(index: number) {
        const i: number = index;
        if (list.includes(i)) {
            return true;
        }
        else {
            return false;
        }
    }

    const filterClickHandler = (filter: string, i:number) => {
        if (!list.includes(i)) {
            list.push(i);
            onSetFilterArray(list);
        }
        else {
            list.splice(list.indexOf(i), 1);
            onSetFilterArray(list);
        }
        setFilter(isFiltered => {return !isFiltered})
    }

    return (
        <div className="filter-content">
            <div className='filter-up' onClick={clickHandler}>
                <span>
                    {title}
                </span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={isActive ? 'dropdown' : 'display-none'} >
                <div className='dropdown-content'>
                    {content.map((f, index) => (
                        <FilterButton text={f}
                        key={index}
                        onClick={() => filterClickHandler(f, index)}
                        selected={toggleStyle(index)}
                        >
                            {f}
                        </FilterButton>
                    )) }
                </div>
            </div>
        </div>
    )
}
export default Filter;