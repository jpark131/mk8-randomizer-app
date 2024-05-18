import React from 'react';
import FilterContent from './FilterContent';
import CollapsibleCard from './CollapsibleCard';

function FilterBox({ 
        title,
        contentTitle,
        onFilterChange, 
        filters,
}) {
    const handleFilterChange = (checked, id) => {
        onFilterChange(checked, id);
    }

    const handleOriginFilterChange = (checked, id) => {
        onOriginFilterChange(checked, id);
    }

    const handleTypeFilterChange = (checked, id) => {
        onTypeFilterChange(checked, id);
    }


    return (
        <CollapsibleCard title={title}>
            <FilterContent title={contentTitle} filters={filters} onFilterChange={handleFilterChange}/>
        </CollapsibleCard>  
    );
}

export default FilterBox;