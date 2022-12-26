import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBar from './src/component/navigation_bar';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="NavigationBar" component={NavigationBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
