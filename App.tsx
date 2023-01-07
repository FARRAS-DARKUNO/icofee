import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NamePage from './src/util/namePage';
import NavigationBar from './src/component/navigation_bar';
import InformasiHargaKopi from './src/page/informasi_hargaKopi';
import ListInformasiHargaKopi from './src/page/list_informasi_harga_kopi';
import InformasiBudiDaya from './src/page/informasi_budidaya';
import DinamicListInformation from './src/page/dinamic_list_information';
import DetailProduk from './src/page/detail_produk';

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
        <Stack.Screen name={NamePage.InformasiBudiDaya} component={InformasiBudiDaya} />
        <Stack.Screen name={NamePage.DinamicListInformation} component={DinamicListInformation} />
        <Stack.Screen name={NamePage.DetailProduk} component={DetailProduk} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
