import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FilterButton from './FilterButton';

type FilterProps = {
    onFilterChange: (currentFilter: string) => void,
    title: string,
    content: string[],
    filters: string[],
    onSetFilterArray: (filtersArray: string[]) => void;
};

const Filter:React.FC<FilterProps> = (props) => {
    const {
        title,
        content,
        onFilterChange,
        filters,
        onSetFilterArray,
    } = props;

    const [isActive, setActive] = useState(false);

    const clickHandler = () => {
        setActive(isActive => { return !isActive});
    }

    const [selected, isSelected] = useState(false);

    const [isFiltered, setFilter] = useState(false);

    let defFilter:number = 0;


    function toggleStyle(obj: string) {
        const i:string = obj;
        if (filters.includes(i)) {
            return true;
        }
        else {
            return false;
        }
    }

    const filterClickHandler = (filter: string, i:number) => {
        if (!filters.includes(filter)) {
            onSetFilterArray([...filters, filter]);
        }
        else {
            onSetFilterArray(filters.filter((obj) => obj !== filter))
        }
        onFilterChange(filter)
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
                        selected={toggleStyle(f)}
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