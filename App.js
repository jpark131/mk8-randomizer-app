import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/screens/StackNavigator';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}


