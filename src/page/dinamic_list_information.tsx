import React from "react"
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
    ScrollView
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import { useNavigation, useRoute } from "@react-navigation/native"
import Header from "../component/header"
import Icon from "react-native-vector-icons/Ionicons"
import Card from "../component/card"

const DinamicListInformation = () => {

    const navigate = useNavigation()
    const goBack = () => navigate.goBack()
    //@ts-ignore
    const { name } = useRoute().params

    const [text, onChangeText] = React.useState<string>("");

    const Dummie = () => console.log('hallo')

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let texts = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name={name} action={goBack} />
            <View style={styles.boxSearching}>
                <View style={styles.search}>
                    <View style={[styles.box12, styles.center]}>
                        <Icon name="search" size={24}
                            color={`${STYLE_GLOBAL.SECONDARY_COLOR.color}`} />
                    </View>
                    <View style={[styles.box88, styles.center]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Seacrh"
                        />
                    </View>
                </View>
            </View>
            <ScrollView>
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={texts} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={texts} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={texts} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={texts} image={img} time={'Senin, 29 juli 2019'} />
                <Card.InformationCard response={Dummie} tittle={'halloooo...'} body={texts} image={img} time={'Senin, 29 juli 2019'} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
    boxSearching: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    search: {
        width: '100%',
        height: 45,
        backgroundColor: STYLE_GLOBAL.TERSIER_COLOR.color,
        borderRadius: 10,
        flexDirection: 'row',

    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box12: {
        width: '12%',
        height: '100%',
    },
    box88: {
        width: '88%',
        height: '100%',
    },
    input: {
        height: '100%',
        width: '100%'
    },

})

export default DinamicListInformation