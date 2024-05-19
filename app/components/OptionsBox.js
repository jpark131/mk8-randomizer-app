import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

function OptionsBox({ 
        numRaces,
        onNumRacesChange,
}) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: '4', value: '4'},
        {label: '6', value: '6'},
        {label: '8', value: '8'},
        {label: '12', value: '12'},
        {label: '16', value: '16'},
        {label: '24', value: '24'},
        {label: '32', value: '32'},
        {label: '48', value: '48'}
    ]);

    const handleSetNumRaces = (value) => {
        onNumRacesChange(value);
    };

    return (
        <Card title="Options">
            <Text style={styles.optionTitle}>Number of Races:</Text> 
            <DropDownPicker
                containerProps={{
                    style: {
                        height: open === true ? 250 : null,
                        backgroundColor: '#fff',
                    },
                }}
                
                open={open}
                value={numRaces}
                items={items}
                setOpen={setOpen}
                setValue={handleSetNumRaces}
                setItems={setItems}
                placeholder={numRaces}
            />
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