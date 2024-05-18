import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import FilterBox from '../components/FilterBox';
import AppButton from '../components/AppButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { cups, origins, types } from '../data/tracks';

function FormScreen({navigation, route}) {
    //filter states
    let cupFilterData = initFilterData(cups)
    const [cupFilters, setCupFilters] = useState(cupFilterData)
    let originFilterData = initFilterData(origins)
    const [originFilters, setOriginFilters] = useState(originFilterData)
    let typeFilterData = initFilterData(types)
    const [typeFilters, setTypeFilters] = useState(typeFilterData)
    
    //number of races states
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

    const handleCupFilterChange = (checked, id) => {
        setCupFilters(
            cupFilters.map(item =>
                item.id === id ? {...item, isChecked: checked} : item,
            ),
        );
    };

    const handleOriginFilterChange = (checked, id) => {
        setOriginFilters(
            originFilters.map(item =>
                item.id === id ? {...item, isChecked: checked} : item,
            ),
        );
    };

    const handleTypeFilterChange = (checked, id) => {
        setTypeFilters(
            typeFilters.map(item =>
                item.id === id ? {...item, isChecked: checked} : item,
            ),
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <FilterBox
                    title="Cup Filters"
                    contentTitle="Cup"
                    onFilterChange={handleCupFilterChange}
                    filters={cupFilters}
                />
                <FilterBox
                    title="Origin Filters"
                    contentTitle="Origin"
                    onFilterChange={handleOriginFilterChange}
                    filters={originFilters}
                />
                <FilterBox
                    title="Type Filters"
                    contentTitle="Type"
                    onFilterChange={handleTypeFilterChange}
                    filters={typeFilters}
                />
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
        </ScrollView>
    );
}

function initFilterData(filters) {
    let data = []
    let i = 0;
    for (let filter of filters) {
        data.push(
            {
                id: i,
                name: filter,
                isChecked: false,
            }
        )
        i++;
    };
    return data
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