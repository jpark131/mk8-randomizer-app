import React, { useState } from 'react';
import CollapsibleCard from './CollapsibleCard';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';
import { Dropdown } from 'react-native-element-dropdown';
import Card from './Card';
import AppDropdown from './AppDropdown';
import { jakes_favorites, tracks } from '../data/tracks';
import { arrayCopy } from '../helpers/arrayCopy';

function QuickPresets({onApplyPreset}) { 
    const [quickPreset, setQuickPreset] = useState("No Stupid City Maps");
    dropdownOptions = [
        {label: 'No Stupid City Maps', value: 'No Stupid City Maps'},
        {label: 'Jake\'s Favorites', value: 'Jake\'s Favorites'}
    ];
    return (
        <Card title="Quick Presets">
            <View style={{flexDirection: 'row'}}>
                <AppDropdown
                    value={quickPreset}
                    dropdownOptions={dropdownOptions}
                    onSetValue={setQuickPreset}
                />
                <AppButton title="Let's Do This" onPress={() => onApplyPreset(presetTracks[quickPreset])}/>
            </View>
        </Card>
    );
}

function compareToFavs(track, favs) {
    let res = false;
    for (fav of favs) {
        res = res || ((track.name === fav.name) && (track.origin === fav.origin));
    }
    return res
}

let presetTracks = {
    'No Stupid City Maps': arrayCopy(tracks.map(track => track.origin === 'Tour' ? {...track, checked: false} : track)),
    'Jake\'s Favorites': arrayCopy(tracks.filter(track => compareToFavs(track, jakes_favorites))),
}

export default QuickPresets;