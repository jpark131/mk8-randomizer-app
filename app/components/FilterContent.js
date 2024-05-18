import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterCheckBox from './FilterCheckBox';
import FilterModeGroup from './FilterModeGroup';

function FilterContent({ title, filters, onFilterChange, onModeChange }) {
    const handleCheckboxPress = (checked, id) => {
        onFilterChange(checked, id);
    };

    const handleModeChange = (selectedItem) => {
        onModeChange(selectedItem);
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

const modeData = [
    {
        id: 0,
        text: "Select and Unselect",
        textComponent: {Text},
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
    {
        id: 1,
        text: "Select Only",
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
    {
        id: 2,
        text: "Unselect Only",
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
    {
        id: 3,
        text: "Hide",
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
    {
        id: 4,
        text: "Hide Others",
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
    {
        id: 5,
        text: "Show",
        style: {padding: 5},
        textStyle: {textDecorationLine: "none"},
        iconStyle: {borderRadius: 20},
        innerIconStyle: {borderRadius: 20},
        fillColor: "dodgerblue"
    },
];

export default FilterContent;