import { StatusBar } from 'react-native';
import StackNavigator from './app/screens/StackNavigator';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

import { CustomDarkTheme } from './app/data/themes';

export default function App() {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <StatusBar/>
      <StackNavigator />
    </NavigationContainer>
  );
}


