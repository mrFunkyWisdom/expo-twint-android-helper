import { StyleSheet, Text, View } from 'react-native';

import * as ExpoTwint from 'expo-twint';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoTwint.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
