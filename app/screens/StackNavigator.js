import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { tracks } from '../data/tracks';
import WelcomeScreen from '../screens/WelcomeScreen';
import ResultsScreen from './ResultsScreen';

const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            initialParams={{tracks: tracks}}
            />
            <Stack.Screen
            name="Results"
            component={ResultsScreen}
            />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      maxWidth: 800,
      resizeMode: "contain"
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignContent: 'center',
    },
});

export default StackNavigator;