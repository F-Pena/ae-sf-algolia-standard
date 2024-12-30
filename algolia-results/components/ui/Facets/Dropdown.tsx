import React, { useState } from 'react';
import { RefinementList } from 'react-instantsearch';

interface DropdownProps {
    title:string,
    attribute:string,
    isSearchable?:boolean,
    limit?:number,
    showMore?:boolean,
    rootClassName?:string,
}

const Dropdown: React.FC<DropdownProps> = ({ title, attribute, isSearchable, limit, showMore, rootClassName }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`filter filter--dropdown ${rootClassName}`}>
            <button 
                className={`filter__toggle ${isOpen ? "filter__toggle--open" : ""}`} 
                onClick={toggleDropdown} 
                aria-expanded={isOpen}
            >
                {title}
            </button>
            {isOpen && (
                <div>
                    <RefinementList 
                        attribute={attribute} 
                        searchablePlaceholder={`Search ${title}`} 
                        searchable={isSearchable} 
                        limit={limit}
                        showMore={showMore} 
                    />
                </div>
            )}
        </div>
    );
};

export default Dropdown;