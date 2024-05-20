import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

function Card({ 
        title,
        contentTitle,
        contentStyle,
        children
}) {
    const { colors } = useTheme();
    return (
        <View style={[{borderColor: colors.border},styles.container]}>
            <View style={[{backgroundColor: colors.card, borderColor: colors.border}, styles.titleBackground]}>
                <Text style={[{color: colors.text},styles.title]}>{title}</Text>
            </View>
            <View style={[{padding: 10}, contentStyle]}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 0.5,
        borderRadius: 5,
        zIndex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleBackground: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 0.5,
    }
});

export default Card;