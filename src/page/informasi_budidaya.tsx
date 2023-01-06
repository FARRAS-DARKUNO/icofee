import React from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import { useNavigation } from "@react-navigation/native"
import Button from "../component/button"
import Card from "../component/card"

const InformasiBudiDaya = () => {
    const navigate = useNavigation()

    const Dummie = () => console.log('hallo')

    const goBack = () => navigate.goBack()

    const listButton = [
        {
            name: 'Informasi Budaya',
            action: Dummie
        },
        {
            name: 'Pasar Kopi',
            action: Dummie
        },
        {
            name: 'Artike Pilihan',
            action: Dummie
        },
        {
            name: 'UMKM Kopi',
            action: Dummie
        },
    ]

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.BackHeader name="Informasi dan Artikel Budaya" action={goBack} />
            <View style={STYLE_GLOBAL.ENTER20} />
            {
                listButton.map((data) => (
                    <Button.NextButton response={data.action} tiitle={data.name} iconLeft={'chevron-right'} key={data.name} />
                ))
            }
            <View style={STYLE_GLOBAL.ENTER10} />
            <View style={styles.box}>
                <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.INFORMATION]}> Informasi Terkini</Text>
            </View>
            <ScrollView>
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
    }
})

export default InformasiBudiDaya