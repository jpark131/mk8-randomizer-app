import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TrackCard from '../components/TrackCard';

function ResultsScreen({navigation, route}) {
    const [trackList, setTracklist] = useState(randomize(route.params.tracks));
    const [numRaces, setNumRaces] = useState(route.params.numRaces);

    const renderTrackCards = () => {
        trackCards = [];
        for (let i = 0; i < numRaces; i++) {
            trackCards.push(
                <TrackCard 
                    key={i}
                    track={trackList[i]} 
                    onReshuffle={() => handleReshuffle(i)} 
                    onRemove={() => handleRemove(i)}
                />
            )
        }
        return trackCards;
    };

    const handleReshuffle = (id) => {
        if (id === -1) {
            setTracklist(randomize(trackList));
        }
        else {
            temp = trackList[id];
            trackList[id] = trackList[4];
            trackList[numRaces] = temp;
            
            goodTracks = trackList.slice(0, numRaces);
            otherTracks = trackList.slice(numRaces);

            setTracklist(goodTracks.concat(randomize(otherTracks)));
        }
    };

    const handleRemove = (id) => {
        let newList = trackList.slice(0,id).concat(trackList.slice(id+1));
        setTracklist(newList);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {renderTrackCards()}
            </View>
        </ScrollView>
    );
}

function randomize(tracks) {
    let randomized = [...tracks];
    let currentIndex = randomized.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [randomized[currentIndex], randomized[randomIndex]] = [
            randomized[randomIndex], randomized[currentIndex]];
    }
    return randomized;
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-evenly'
    },
});

export default ResultsScreen;