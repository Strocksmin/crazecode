import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Filter from './Filter';

type FilterMenuProps = {
    onFilterChange: (currentFilter: string) => void;
};

const FilterMenu:React.FC<FilterMenuProps> = (props) => {
    const {onFilterChange} = props;

    const filters = {title: "Название", content: ["FizzBuzz", "Two sum"]};

    return (
    <div className='filter-block'> 
            <div className='filter-menu'>
                <div className='filter-buttons'>
                    <div className='filter-content'>
                        <div className='filter-up'>
                            <span>
                                Сложность
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className='dropdown'>
                            <div className='dropdown-content'>
                                    <button className='dropdown-button'>Легко</button>
                                    <button className='dropdown-button'>Нормально</button>
                                    <button className='dropdown-button'>Сложно</button>
                            </div>
                        </div>
                    </div>
                    <div className='filter-content'>
                        <div className='filter-up'>
                            <span>
                                Статус
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className='dropdown'>
                            <div className='dropdown-content'>
                                    <button className='dropdown-button'>Выполнено</button>
                                    <button className='dropdown-button'>Не сделано</button>
                            </div>
                        </div>
                    </div>
                    <div className='filter-content'>
                        <div className='filter-up'>
                            <span>
                                Списки
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className='dropdown'>
                            <div className='dropdown-content'>
                                    <button className='dropdown-button'>Список 1</button>
                                    <button className='dropdown-button'>Список 2</button>
                                    <button className='dropdown-button'>Список 3</button>
                            </div>
                        </div>
                    </div>
                    <Filter 
                    title={filters.title}
                    content={filters.content}
                    onFilterChange={currentFilter => onFilterChange(currentFilter)}
                    />
                </div>
            </div>
        </div>
    )
}
export default FilterMenu;