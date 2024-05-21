import React, { useState } from 'react';
import { View } from 'react-native';

import Card from './Card';
import AppButton from './AppButton';
import AppDropdown from './AppDropdown';
import { arrayCopy } from '../helpers/arrayCopy';
import { heathers_favorites, jakes_favorites, tracks } from '../data/tracks';

function QuickPresets({onApplyPreset}) { 
    const [quickPreset, setQuickPreset] = useState("No Stupid City Maps");
    dropdownOptions = [
        {label: 'No Stupid City Maps', value: 'No Stupid City Maps'},
        {label: 'Jake\'s Favorites', value: 'Jake\'s Favorites'},
        {label: 'Heather\'s Favorites', value: 'Heather\'s Favorites'},
    ];
    return (
        <Card title="Quick Presets">
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
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
    'Heather\'s Favorites': arrayCopy(tracks.filter(track => compareToFavs(track, heathers_favorites))),
}

export default QuickPresets;