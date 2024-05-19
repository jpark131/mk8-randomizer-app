import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TrackCard from '../components/TrackCard';

function ResultsScreen({navigation, route}) {
    const [trackList, setTracklist] = useState(randomize(route.params.tracks));

    const handleReshuffle = (id) => {
        if (id === -1) {
            setTracklist(randomize(trackList));
        }
        else {
            temp = trackList[id];
            trackList[id] = trackList[4];
            trackList[4] = temp;
            
            goodTracks = trackList.slice(0, 4);
            otherTracks = trackList.slice(4);

            setTracklist(goodTracks.concat(randomize(otherTracks)));
        }
    };

    const handleRemove = (id) => {
        console.log(`Remove ${id}`)
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TrackCard track={trackList[0]} onReshuffle={() => handleReshuffle(0)} onRemove={() => handleRemove(0)}/>
                <TrackCard track={trackList[1]} onReshuffle={() => handleReshuffle(1)} onRemove={() => handleRemove(1)}/>
                <TrackCard track={trackList[2]} onReshuffle={() => handleReshuffle(2)} onRemove={() => handleRemove(2)}/>
                <TrackCard track={trackList[3]} onReshuffle={() => handleReshuffle(3)} onRemove={() => handleRemove(3)}/>
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