import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Filter from './Filter';

type FilterMenuProps = {
    onFilterChange: (currentFilter: string) => void,
    filtersArray: number[],
    onSetFilterArray: (filtersArray: number[]) => void;
};

const FilterMenu:React.FC<FilterMenuProps> = (props) => {
    const {
        onFilterChange,
        filtersArray,
        onSetFilterArray
    } = props;

    const filterStructure = [
        {
            title: "Сложность",
            content: [
                "Легко", "Нормально", "Сложно"
            ],
            state: [

            ]
        },
        {
            title: "Статус",
            content: [
                "Выполнено", "Не выполнено"
            ],
            state: [

            ]
        },
        {
            title: "Статус",
            content: [
                "Выполнено", "Не выполнено"
            ],
            state: [

            ]
        },
        {
            title: "Название",
            content: [
                "FizzBuzz", "Two sum"
            ],
            state: [

            ]
        },
    ];
    return (
    <div className='filter-block'> 
            <div className='filter-menu'>
                <div className='filter-buttons'>
                    {filterStructure.map((filterObject, index) => (
                        <Filter title={filterObject.title}
                        content={filterObject.content}
                        onFilterChange={currentFilter => onFilterChange(currentFilter)}
                        filters={/*filtersArray*/ filterObject.state}
                        onSetFilterArray={filtersArray => onSetFilterArray(filtersArray)}
                        key={index}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
export default FilterMenu;