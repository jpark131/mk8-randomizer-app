import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterCheckBox from './FilterCheckBox';
import FilterModeGroup from './FilterModeGroup';
import AppButton from './AppButton';

function FilterContent({ title, filters, onFilterChange, onModeChange, onApplyFilter }) {
    const handleCheckboxPress = (checked, id) => {
        onFilterChange(checked, id);
    };

    const handleModeChange = (selectedItem) => {
        onModeChange(selectedItem);
    };

    const handleApplyFilter = () => {
        onApplyFilter();
    };
    
    return (
        <View>
            <Text style={styles.filterContentTitle}>Mode:</Text> 
            <FilterModeGroup 
                modes={["Select and Unselect", "Select Only", "Unselect Only", "Hide", "Hide Others", "Show"]} 
                onModeChange={handleModeChange}
            />
            <Text style={styles.filterContentTitle}>{title}:</Text>  
            <View style={styles.filterContentSection}>
                {filters.map(filter => (
                    <View key={filter.id}>
                        <FilterCheckBox
                            id={filter.id}
                            key={filter.id}
                            text={filter.name}
                            checkBoxWidth={150}
                            isChecked={filter.isChecked}
                            onCheckboxPress={handleCheckboxPress}
                        />
                    </View>
                ))}
                <AppButton title="Apply" onPress={handleApplyFilter}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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