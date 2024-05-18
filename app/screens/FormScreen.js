import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FilterBox from '../components/FilterBox';
import AppButton from '../components/AppButton';
import DropDownPicker from 'react-native-dropdown-picker';

function FormScreen({navigation, route}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(4);
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
    return (
        <View style={styles.container}>
            <FilterBox/>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder='Number of Races (default 4)'
            />
            <AppButton 
                title="Randomize!" 
                onPress={() => navigation.navigate("Results", {tracks: route.params.tracks})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        maxWidth: 800,
        resizeMode: "contain",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: '100%',
        maxWidth: 800,
        alignSelf: 'center',
    }
});

export default FormScreen;