import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterBox from '../components/FilterBox';
import AppButton from '../components/AppButton';

function FormScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <FilterBox/>
            <AppButton 
                title="Randomize!" 
                onPress={() => navigation.navigate("Results", {tracks: route.params.tracks})}/>
        </View>
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
        padding: 20,
    }
});

export default FormScreen;