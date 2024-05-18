import React from 'react';
import FilterContent from './FilterContent';
import CollapsibleCard from './CollapsibleCard';

function FilterBox({ 
        title,
        contentTitle,
        onFilterChange,
        filters,
        onModeChange,
}) {
    const handleFilterChange = (checked, id) => {
        onFilterChange(checked, id);
    };

    const handleModeChange = (selectedItem) => {
        onModeChange(selectedItem);
    };


    return (
        <CollapsibleCard title={title}>
            <FilterContent title={contentTitle} filters={filters} onFilterChange={handleFilterChange} onModeChange={handleModeChange}/>
        </CollapsibleCard>  
    );
}

export default FilterBox;