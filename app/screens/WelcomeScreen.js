import React from 'react';
import { Image, Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';
import TrackCard from '../components/TrackCard';

function WelcomeScreen({tracks}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '90%',
                resizeMode: "contain"              
            }}/>
            <Text>Welcome to the Mario Kart 8 Deluxe Randomizer!!</Text>
            <AppButton title="Let's a Go!" color="tomato" style={{marginTop: '2%'}}onPress={() => console.log("tapped")}/>
            <TrackCard track={tracks[0]} />
            <Image style={styles.background} source={require("../assets/characters.png")}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        maxWidth: 800,
        resizeMode: "contain"
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

export default WelcomeScreen