import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OOTD_EVERDAY</Text>
      <Text>Posts</Text>
      <Text>ootd_everyday</Text>
      <Text>via frenchie_fry39</Text>
      <Text>Image will go here</Text>
      <Text>like, comment, share, save buttons</Text>
      <Text>Liked by......</Text>
      
      <StatusBar style="auto" />
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
