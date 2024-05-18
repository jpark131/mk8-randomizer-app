import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({title, color="dodgerblue", style, textstyle, onPress}) {
    return(
        <TouchableOpacity 
            style={[
                style,
                styles.button,
                {backgroundColor: color},
            ]}
            onPress={onPress}>
            <Text style={textstyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
})

export default AppButton