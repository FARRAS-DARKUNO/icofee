import React, { type PropsWithChildren } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Button from './src/component/button';
import STYLE_GLOBAL from './src/util/style_global';
import Card from './src/component/card';
import CheckVerified from './src/component/verification/ceck_verified';


const App = () => {

  const dummie = () => console.log('Masuk')

  let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

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
        <Card.InformationCard response={dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Card.NotificationCard response={dummie} tittle={text} time={'Senin, 29 juli 2019'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Card.PriceCard response={dummie} tittle={'Manstap'} body={text} isUpgrade={1} image={img} price={"20.000"} persen={'20'} />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Card.ChoiceAdd />
        <View style={STYLE_GLOBAL.ENTER20} />
        <Card.ChoiceUpgrade />
        <View style={STYLE_GLOBAL.ENTER20} />
        <CheckVerified.BelumTerverifikasi />
        <View style={STYLE_GLOBAL.ENTER20} />
        <CheckVerified.Terverifikasi />
        <View style={STYLE_GLOBAL.ENTER20} />
      </ScrollView>
    </View>
  )
}

export default App;
