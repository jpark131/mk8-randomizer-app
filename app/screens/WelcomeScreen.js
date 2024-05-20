import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen({navigation, route}) {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '90%',
                maxWidth: 800,
                resizeMode: "contain",
                marginBottom: -20,          
            }}/>
            <Text style={{color: colors.text}}>Welcome to the Mario Kart 8 Deluxe Randomizer!!</Text>
            <AppButton 
                title="Let's a Go!" 
                onPress={() => navigation.replace("Mario Kart 8 Track Chooser")}
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
});

export default WelcomeScreen