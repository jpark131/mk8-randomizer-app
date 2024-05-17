import React from 'react';
import { Image, Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '90%',
                marginVertical: -30,
                resizeMode: "contain"              
            }}/>
            <Text>Welcome to the Mario Kart 8 Deluxe Randomizer!!</Text>
            <AppButton title="Let's a Go!" color="tomato" onPress={() => console.log("tapped")}/>
            <ImageBackground style={styles.background} source={require("../assets/characters.png")}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        resizeMode: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

export default WelcomeScreen