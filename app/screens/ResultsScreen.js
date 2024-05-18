import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TrackCard from '../components/TrackCard';

function ResultsScreen({navigation, route}) {
    randomize(route.params.tracks)

    return (
        <ScrollView>
            <View style={styles.container}>
                <TrackCard track={route.params.tracks[0]} />
                <TrackCard track={route.params.tracks[1]} />
                <TrackCard track={route.params.tracks[2]} />
                <TrackCard track={route.params.tracks[3]} />
            </View>
        </ScrollView>
    );
}

function randomize(tracks) {
    let currentIndex = tracks.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [tracks[currentIndex], tracks[randomIndex]] = [
            tracks[randomIndex], tracks[currentIndex]];
    }
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