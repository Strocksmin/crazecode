import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FilterButton from './FilterButton';

type FilterProps = {
    title: string,
    content: string[],
    filters: string[],
    onSetFilterArray: (filtersArray: string[]) => void;
};

const Filter: React.FC<FilterProps> = (props) => {
    const {
        title,
        content,
        filters,
        onSetFilterArray,
    } = props;

    const [isActive, setActive] = useState(false);

    const clickHandler = () => {
        setActive(isActive => { return !isActive });
    }

    function toggleStyle(obj: string) {
        const i: string = obj;
        if (filters.includes(i)) {
            return true;
        }
        else {
            return false;
        }
    }

    const filterClickHandler = (filter: string, i: number) => {
        if (!filters.includes(filter)) {
            onSetFilterArray([...filters, filter]);
        }
        else {
            onSetFilterArray(filters.filter((obj) => obj !== filter))
        }
    }

    return (
        <div className="filters-content">
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
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Filter;