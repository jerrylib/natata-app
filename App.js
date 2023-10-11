import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{ height: '100px', width: '100px' }} source='https://natata-api.vercel.app/logo.png' />
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text>Open up App.js to start working on your app!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: '20px'
  }
});
