import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import {images} from '../data/images'
import AppButton from './AppButton';

function TrackCard({ track, onReshuffle, onRemove }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={images[track.image].uri} />
            <Text style={styles.title}>{track.name}, {track.origin}</Text>
            <Image style={styles.cupimage} source={images[track.cupimage].uri} />
            <Text style={styles.cup}>{track.cup}</Text>
            <Text style={styles.type}>{track.typeString}</Text>
            <View style={styles.buttons}>
                <AppButton title="Reshuffle" onPress={() => onReshuffle()}/>
                <AppButton title="Remove" onPress={() => onRemove()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row'
    },
    card: {
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "#000",
        backgroundColor: "#fff",
        marginBottom: 20,
        overflow: "hidden",
        padding: 10,
        flexWrap: 'wrap',        
    },
    image: {

    },
    cupimage: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    title: {
        fontSize: 20,
        maxWidth: 217,
        fontWeight: 'bold'
    },
    cup: {
    },
    type: {
        color: 'gray',
        maxWidth: 217,
    }
})

export default TrackCard;