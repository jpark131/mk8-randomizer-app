import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { tracks } from './app/data/tracks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen tracks={tracks}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
});
