import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';
import Page from './Views/Page';

export default function App() {
  return (
    <View style={css.container}>
      <Text style={css.title}>Olá pessoal!</Text>
      <Text>by EXPO</Text>
      <Page name='DouggS' />
      <StatusBar style="auto" />
    </View>
  );
}
