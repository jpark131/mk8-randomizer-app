import React from 'react';
import { Image, Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen({navigation, route}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '90%',
                resizeMode: "contain"              
            }}/>
            <Text>Welcome to the Mario Kart 8 Deluxe Randomizer!!</Text>
            <AppButton 
                title="Let's a Go!" 
                color="dodgerblue" 
                style={{marginTop: '2%'}} 
                onPress={() => navigation.replace("Results", {tracks: route.params.tracks})}
            />
            <Image style={styles.background} source={require("../assets/characters.png")}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        maxWidth: 800,
        resizeMode: "contain",
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

export default WelcomeScreen