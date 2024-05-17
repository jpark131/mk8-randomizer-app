import React from 'react';
import { Image, Text, SafeAreaView, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '90%',
                resizeMode: "contain",                
            }}/>
            <Text>Welcome to the Mario Kart 8 Deluxe Randomizer!!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})

export default WelcomeScreen