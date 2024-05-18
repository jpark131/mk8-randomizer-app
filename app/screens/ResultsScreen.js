import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TrackCard from '../components/TrackCard';

function ResultsScreen({navigation, route}) {
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