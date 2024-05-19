import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import ResultsScreen from './ResultsScreen';
import FormScreen from './FormScreen';

const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="Mario Kart 8 Track Chooser"
                component={FormScreen}
            />
            <Stack.Screen
                name="Results"
                component={ResultsScreen}
                options={{ headerBackTitle: 'Back' }}
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