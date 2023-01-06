import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBar from './src/component/navigation_bar';
import InformasiHargaKopi from './src/page/informasi_hargaKopi';
import ListInformasiHargaKopi from './src/page/list_informasi_harga_kopi';
import NamePage from './src/util/namePage';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={NamePage.NavigationBar} component={NavigationBar} />
        <Stack.Screen name={NamePage.InformasiHargaKopi} component={InformasiHargaKopi} />
        <Stack.Screen name={NamePage.ListInformasiHargaKopi} component={ListInformasiHargaKopi} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
