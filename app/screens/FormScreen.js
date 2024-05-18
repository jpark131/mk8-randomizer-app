import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import FilterBox from '../components/FilterBox';
import AppButton from '../components/AppButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { cups, origins, types } from '../data/tracks';
import OptionsBox from '../components/OptionsBox';
import Card from '../components/Card';

function FormScreen({navigation, route}) {
    //filter states
    let cupFilterData = initFilterData(cups)
    const [cupFilters, setCupFilters] = useState(cupFilterData)
    let originFilterData = initFilterData(origins)
    const [originFilters, setOriginFilters] = useState(originFilterData)
    let typeFilterData = initFilterData(types)
    const [typeFilters, setTypeFilters] = useState(typeFilterData)

    //mode states
    const [cupFilterMode, setCupFilterMode] = useState("Select and Unselect");
    const [originFilterMode, setOriginFilterMode] = useState("Select and Unselect");
    const [typeFilterMode, setTypeFilterMode] = useState("Select and Unselect");
    
    //number of races states
    const [numRaces, setNumRaces] = useState(4);

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

    const handleCupFilterModeChange = (selectedItem) => {
        setCupFilterMode(selectedItem);
    };

    const handleOriginFilterModeChange = (selectedItem) => {
        setOriginFilterMode(selectedItem);
    };

    const handleTypeFilterModeChange = (selectedItem) => {
        setTypeFilterMode(selectedItem);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <FilterBox
                    title="Cup Filters"
                    contentTitle="Cup"
                    onFilterChange={handleCupFilterChange}
                    filters={cupFilters}
                    onModeChange={handleCupFilterModeChange}
                />
                <FilterBox
                    title="Origin Filters"
                    contentTitle="Origin"
                    onFilterChange={handleOriginFilterChange}
                    filters={originFilters}
                    onModeChange={handleOriginFilterModeChange}
                />
                <FilterBox
                    title="Type Filters"
                    contentTitle="Type"
                    onFilterChange={handleTypeFilterChange}
                    filters={typeFilters}
                    onModeChange={handleTypeFilterModeChange}
                />
                <OptionsBox 
                    numRaces={numRaces}
                    onNumRacesChange={setNumRaces}
                />
                <Card title="Randomize!">
                    <AppButton 
                        title="Submit" 
                        onPress={() => navigation.navigate("Results", {tracks: route.params.tracks})}
                    />
                </Card>
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
        maxWidth: 1000,
        alignSelf: 'center',
    }
});

export default FormScreen;