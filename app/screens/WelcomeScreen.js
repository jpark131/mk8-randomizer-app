import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen({navigation, route}) {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-mk8.png")} style={{
                width: '80%',
                maxWidth: 800,
                maxHeight: 300,
                resizeMode: "contain",         
            }}/>
            <AppButton 
                title="Let's a Go!" 
                onPress={() => navigation.replace("MK8 Deluxe Track Chooser")}
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