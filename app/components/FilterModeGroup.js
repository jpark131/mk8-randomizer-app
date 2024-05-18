import React, { useState } from 'react';
import { View } from 'react-native';
import FilterCheckBox from './FilterCheckBox';

function FilterModeGroup({modes, onModeChange}) {
    const [mode, setMode] = useState("Select and Unselect");

    const handleCheckboxPress = (checked, id) => {
        let selectedItem = "Select and Unselect";
        if (checked) {
            selectedItem = modes[id]
        }
        setMode(selectedItem);
        onModeChange(selectedItem);
    };

    const ifCurrentMode = (thisMode) => {
        return mode === thisMode;
    };

    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {modes.map(thisMode => (
                <View key={modes.indexOf(thisMode)}>
                    <FilterCheckBox
                        id={modes.indexOf(thisMode)}
                        text={thisMode}
                        minCheckBoxWidth={120}
                        isChecked={ifCurrentMode(thisMode)}
                        onCheckboxPress={handleCheckboxPress}
                    />
                </View>
            ))}
        </View>
    );
}

export default FilterModeGroup;