import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TrackCard from '../components/TrackCard';
import AppButton from '../components/AppButton';

function ResultsScreen({navigation, route}) {
    const [trackList, setTrackList] = useState(randomize(route.params.tracks));
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
            setTrackList(randomize(trackList));
        }
        else {
            temp = trackList[id];
            trackList[id] = trackList[4];
            trackList[numRaces] = temp;
            
            goodTracks = trackList.slice(0, numRaces);
            otherTracks = trackList.slice(numRaces);

            setTrackList(goodTracks.concat(randomize(otherTracks)));
        }
    };

    const handleRemove = (id) => {
        let newList = trackList.slice(0,id).concat(trackList.slice(id+1));
        setTrackList(newList);
    };

    const handleNextSet = () => {
        let newTrackList = trackList.slice(numRaces);
        if (numRaces > newTrackList.length) {
            setNumRaces(newTrackList.length);
        }
        setTrackList(newTrackList);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <AppButton title="Reshuffle All" onPress={() => handleReshuffle(-1)} />
                {trackList.length - numRaces
                    ? <AppButton title="Next Set" onPress={handleNextSet} />
                    : null
                }
                {trackList.length - numRaces
                    ? <Text>Tracks Remaining: {trackList.length - numRaces}</Text>
                    : <Text>No Tracks Remaining!</Text>
                }
            </View>
            <ScrollView style={{width: '100%'}}>
                <View style={styles.cardContainer}>
                    {renderTrackCards()}
                </View>
            </ScrollView>
        </View>
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
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: 'white',
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        borderTopColor: 'lightgray',
        borderTopWidth: 0.5,

        padding: 10,
        marginBottom: 100
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default ResultsScreen;