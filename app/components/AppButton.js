import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function AppButton({title, color, style, textstyle, onPress}) {
    return(
        <TouchableOpacity 
            style={[
                style,
                {backgroundColor: color},
                styles.button
            ]}
            onPress={onPress}>
            <Text style={textstyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'tomato',
    },
})

export default AppButton