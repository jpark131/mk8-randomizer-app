import React from 'react';
import FilterContent from './FilterContent';
import CollapsibleCard from './CollapsibleCard';

function FilterBox({ 
        onCupFilterChange, 
        cupFilters,
        onOriginFilterChange,
        originFilters,
        onTypeFilterChange,
        typeFilters
}) {
    const handleCupFilterChange = (checked, id) => {
        onCupFilterChange(checked, id);
    }

    const handleOriginFilterChange = (checked, id) => {
        onOriginFilterChange(checked, id);
    }

    const handleTypeFilterChange = (checked, id) => {
        onTypeFilterChange(checked, id);
    }


    return (
        <CollapsibleCard title="Filters">
            <FilterContent title="Cup" filters={cupFilters} onFilterChange={handleCupFilterChange}/>
            <FilterContent title="Game of Origin" filters={originFilters} onFilterChange={handleOriginFilterChange}/>
            <FilterContent title="Track Type" filters={typeFilters} onFilterChange={handleTypeFilterChange}/>
        </CollapsibleCard>  
    );
}

export default FilterBox;