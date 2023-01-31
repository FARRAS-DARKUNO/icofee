import React, { useState, useEffect } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Image
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import { useNavigation, useRoute } from "@react-navigation/native"
import Header from "../component/header"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"
import convertDete from "../util/convert_dete"
import RemoveTagHTML from "../util/remove_tag_html"

const DetailArtikel = () => {

    //@ts-ignore
    const { id } = useRoute().params

    const navigate = useNavigation()
    const goback = () => navigate.goBack()

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getListArticleByID({
                    setLoading: setLoading,
                    token: token!,
                    setData: setData,
                    id: id
                })
            })
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Detail Artikel" action={goback} />
            <View style={STYLE_GLOBAL.ENTER10} />
            {
                isLoading ? <Loading /> :
                    <ScrollView>
                        <View style={[styles.boxImage, styles.padding]}>
                            <Image source={{ uri: data.thumbnail }} style={styles.image} />
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Bolu Kopi Keju</Text>
                            <Text style={[STYLE_GLOBAL.TERSIER_COLOR, STYLE_GLOBAL.HEADER3]}>
                                {convertDete(data.created_at)}
                            </Text>
                            <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                                {`Kategori : ${data.category_name}`}
                            </Text>
                            <View style={STYLE_GLOBAL.ENTER30} />
                            <Text style={[styles.textDetail, STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                                {RemoveTagHTML(data.body)}
                            </Text>
                        </View>
                    </ScrollView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
    padding: {
        width: '100%',
        paddingHorizontal: 20,
    },
    boxImage: {
        height: 200,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'center'
    },
    textDetail: {
        textAlign: 'justify'
    },
})

export default DetailArtikel