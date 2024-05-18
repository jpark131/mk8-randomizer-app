import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterCheckBox from './FilterCheckBox';

function FilterContent({ title, filters, onFilterChange }) {
    const handleCheckboxPress = (checked, id) => {
        onFilterChange(checked, id);
    };
    
    return (
        <View>
            <Text style={styles.filterContentTitle}>{title}:</Text>  
            <View style={styles.filterContentSection}>
                {filters.map(filter => (
                    <View key={filter.id} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <FilterCheckBox
                            id={filter.id}
                            key={filter.id}
                            text={filter.name}
                            isChecked={filter.isChecked}
                            onCheckboxPress={handleCheckboxPress}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    checkbox: {
       width: 64,
       height: 64
    },
    filterContentSection: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    filterContentTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FilterContent;