import React from 'react';
import { StyleSheet, Text,  } from 'react-native';

import Card from './Card';
import AppDropdown from './AppDropdown';

function OptionsBox({ numRaces, onNumRacesChange }) {
    dropdownOptions = [
        {label: '4', value: 4},
        {label: '6', value: 6},
        {label: '8', value: 8},
        {label: '12', value: 12},
        {label: '16', value: 16},
        {label: '24', value: 24},
        {label: '32', value: 32},
        {label: '48', value: 48}
    ];

    return (
        <Card title="Options">
            <Text style={styles.optionTitle}>Number of Races:</Text> 
            <AppDropdown value={numRaces} dropdownOptions={dropdownOptions} onSetValue={onNumRacesChange} />
        </Card>
    );
}

const styles = StyleSheet.create({
    optionTitle: {
        padding: 10,
        fontSize: 16,
    },
});

export default OptionsBox;