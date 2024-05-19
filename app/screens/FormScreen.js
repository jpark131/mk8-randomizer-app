import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { tracks, cups, origins, types } from '../data/tracks';
import FilterBox from '../components/FilterBox';
import AppButton from '../components/AppButton';
import OptionsBox from '../components/OptionsBox';
import Card from '../components/Card';
import TrackTable from '../components/TrackTable';

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

    //tracks states
    const [trackSelections, setTrackSelections] = useState(tracks);

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

    const applyFilters = (filterType) => {
        switch(filterType){
            case "cup":
                filters = cupFilters;
                filterMode = cupFilterMode;
                break;
            case "origin":
                filters = originFilters;
                filterMode = originFilterMode;
                break;
            case "typeString":
                filters = typeFilters;
                filterMode = typeFilterMode;
                break;
        }
    
        let tempTracks = [];
        for (track of trackSelections) {
            for (filterObj of filters.filter((filter) => filter.isChecked)) {
                let filter = filterObj.name;
                console.log(filter, filterType, track[filterType])
                if (track[filterType].includes(filter)) {
                    switch(filterMode) {
                        case "Select and Unselect": case "Select Only":
                            track.hidden = false;
                            track.checked = true;
                            break;
                        case "Unselect Only":
                            track.checked = false;
                            break;
                        case "Hide":
                            track.checked = false;
                            track.hidden = true;
                            break;
                        case "Show":
                            track.hidden = false;
                            break;
                    }
                }
                else {
                    switch(filterMode) {
                        case "Select and Unselect":
                            track.checked = false;
                            break;
                        case "Hide Others":
                            track.checked = false;
                            track.hidden = true;
                            break;
                    }   
                }
            }
            tempTracks.push(track);
        }
        setTrackSelections(tempTracks);
    };
    
    console.log(trackSelections)
    return (
        <ScrollView>
            <View style={styles.container}>
                <FilterBox
                    title="Cup Filters"
                    contentTitle="Cup"
                    onFilterChange={handleCupFilterChange}
                    filters={cupFilters}
                    onModeChange={handleCupFilterModeChange}
                    onApplyFilter={() => applyFilters("cup")}
                    />
                <FilterBox
                    title="Origin Filters"
                    contentTitle="Origin"
                    onFilterChange={handleOriginFilterChange}
                    filters={originFilters}
                    onModeChange={handleOriginFilterModeChange}
                    onApplyFilter={() => applyFilters("origin")}
                    />
                <FilterBox
                    title="Type Filters"
                    contentTitle="Type"
                    onFilterChange={handleTypeFilterChange}
                    filters={typeFilters}
                    onModeChange={handleTypeFilterModeChange}
                    onApplyFilter={() => applyFilters("typeString")}
                    />
                <OptionsBox 
                    numRaces={numRaces}
                    onNumRacesChange={setNumRaces}
                    />
                <Card title="Randomize!">
                    <AppButton 
                        title="Submit" 
                        onPress={() => navigation.navigate("Results", {tracks: tracks})}
                        />
                </Card>
                <TrackTable tracks={trackSelections}/>
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