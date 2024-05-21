import React, { useState } from 'react';
import { RefinementList } from 'react-instantsearch';

interface DropdownProps {
    title:string,
    attribute:string,
    isSearchable?:boolean
}

const Dropdown: React.FC<DropdownProps> = ({ title, attribute, isSearchable }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDropdown} aria-expanded={isOpen}>
                {title}
            </button>
            {isOpen && (
                <div>
                    <RefinementList attribute={attribute} searchable={isSearchable} />
                </div>
            )}
        </div>
    );
};

export default Dropdown;