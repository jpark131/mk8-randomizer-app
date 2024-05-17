import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { tracks } from '../data/tracks';
import AppButton from '../components/AppButton';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const Example = ({navigation}) => (
    <View style={styles.container}>
      <Text>Hello</Text>
      <AppButton title="Let's a Go Back!" color="dodgerblue" style={{marginTop: '2%'}}onPress={() => navigation.replace("Welcome")}/>
      <Image style={styles.background} source={require("../assets/characters.png")}/>
    </View>
  )
  

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            initialParams={{tracks: tracks}}
            />
            <Stack.Screen
            name="Example"
            component={Example}
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