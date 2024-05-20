import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/screens/StackNavigator';

import { CustomDarkTheme } from './app/data/themes';

export default function App() {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}


