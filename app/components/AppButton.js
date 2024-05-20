import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

function AppButton({title, color, style, textstyle, onPress}) {
    const { colors } = useTheme();
    return(
        <TouchableOpacity 
            style={[
                style,
                styles.button,
                {backgroundColor: !color && colors.primary},
            ]}
            onPress={onPress}>
            <Text style={[{color: colors.text}, styles.textStyle, textstyle]}>{title}</Text>
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
    textStyle: {
    }
})

export default AppButton