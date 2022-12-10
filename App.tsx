import React, { type PropsWithChildren } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Button from './src/component/button';
import STYLE_GLOBAL from './src/util/style_global';


const App = () => {

  const dummie = () => console.log('Masuk')

  return (
    <View>
      <ScrollView>
        <Button.NormalButton response={dummie} tiitle={'MANtaps'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Button.ProfilButton response={dummie} tiitle={'MANtaps'} iconRight={'chevron-right'} iconLeft={'exit-to-app'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Button.NextButton response={dummie} tiitle={'MANtaps'} iconLeft={'chevron-right'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Button.RegisterButton response={dummie} tiitle={'MANtaps'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Button.ChoiceButton response={dummie} />
        <View style={STYLE_GLOBAL.ENTER20} />
      </ScrollView>
    </View>
  )
}

export default App;
