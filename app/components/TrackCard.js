import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from './AppButton';
import { images } from '../data/images'

function TrackCard({ track, onReshuffle, onRemove }) {
    const { colors } = useTheme();
    return (
        <View style={[styles.card, {borderColor: colors.border, backgroundColor: colors.card}]}>
            <Image style={styles.image} source={images[track.image].uri} />
            <Text style={[styles.title, {color: colors.text}]}>{track.name}, {track.origin}</Text>
            <Image style={styles.cupimage} source={images[track.cupimage].uri} />
            <Text style={[styles.cup, {color: colors.text}]}>{track.cup}</Text>
            <Text style={[styles.type, {color: colors.secondaryText}]}>{track.typeString}</Text>
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