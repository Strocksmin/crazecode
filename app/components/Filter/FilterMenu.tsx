import "semantic-ui-css/components/input.min.css"
import "semantic-ui-css/components/icon.min.css"
import React from 'react';
import Filter from './Filter';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input/Input';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FilterMenuProps = {
    onFilterChange: (currentFilter: string) => void,
    filtersArray: string[],
    onSetFilterArray: (filtersArray: string[]) => void;
    filterStructure: {title: string, content:string[], state:string[]}[]
    onSetSearchTerm: (searchTerm: React.SetStateAction<string>) => void
    searchTerm:string
};

const FilterMenu:React.FC<FilterMenuProps> = (props) => {
    const {
        onFilterChange,
        filtersArray,
        onSetFilterArray,
        filterStructure,
        onSetSearchTerm,
        searchTerm
    } = props;


    /*const filterStructure = [
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
    ]; */

    const handleChange = (e: any) => {
        onSetSearchTerm(e.target.value);
      };

    return (
    <div className='filter-block'> 
            <div className='filter-menu'>
                <div className='filter-buttons'>
                    {filterStructure.map((filterObject, index) => (
                        <Filter title={filterObject.title}
                        content={filterObject.content}
                        onFilterChange={currentFilter => onFilterChange(currentFilter)}
                        filters={filtersArray}
                        onSetFilterArray={filtersArray => onSetFilterArray(filtersArray)}
                        key={index}
                        />
                    ))}
                </div>
                <div className="ui icon input">
                <Input 
                icon='search'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
}
export default FilterMenu;