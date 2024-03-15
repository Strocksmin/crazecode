import React from 'react';
import Select from "react-select";
import { languageOptions } from '@/app/constants/languages';

type LanguagesDropdownProps = {
    onSelectChange: (sl: any) => void;
};

const LanguagesDropdown:React.FC<LanguagesDropdownProps> = (props) => {
    const {
        onSelectChange
    } = props;

    return  (
        <Select
          placeholder={`Filter By Category`}
          options={languageOptions}
          defaultValue={languageOptions[0]}
          onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
      );
}
export default LanguagesDropdown;