import React, { type PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text style={styles.container}>hallo</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    color: "black",
    fontSize: 24,
    fontFamily: 'Poppins-Regular'
  }
});
export default App;
