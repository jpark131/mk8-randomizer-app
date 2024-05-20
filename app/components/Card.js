import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Card({ 
        title,
        contentTitle,
        contentStyle,
        children
}) {
    return (
        <View style={styles.container}>
            <View style={styles.titleBackground}>
                <Text style={styles.title}>{title}</Text>
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
        borderColor: 'gray',
        borderRadius: 5,
        zIndex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleBackground: {
        width: '100%',
        backgroundColor: 'lightgray',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    }
});

export default Card;