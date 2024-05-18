import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FilterBox(props) {
    return (
        <View style={styles.container}>
            <Text>Filters would be here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        padding: 20,
    }
});

export default FilterBox;