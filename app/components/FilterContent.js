import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FilterCheckBox from './FilterCheckBox';

function FilterContent({ title, filters }) {
    const checkBoxData = [];
    let i = 0;
    for (let filter of filters) {
        checkBoxData.push(
            {
                id: i,
                name: filter,
                isChecked: false,
            }
        )
        i++;
    };
    
    const [checkBoxes, setCheckBoxes] = useState(checkBoxData);

    const handleCheckboxPress = (checked, id) => {
        setCheckBoxes(
            checkBoxes.map(item =>
                item.id === id ? {...item, isChecked: checked} : item,
            ),
        );
    };
    
    return (
        <View>
            <Text style={styles.filterContentTitle}>{title}:</Text>  
            <View style={styles.filterContentSection}>
                {checkBoxes.map(filter => (
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