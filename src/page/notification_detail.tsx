import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    ScrollView
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import { useNavigation, useRoute } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"
import RemoveTagHTML from "../util/remove_tag_html"
import convertDete from "../util/convert_dete"

const NotificationDetail = () => {

    //@ts-ignore
    const { id, type } = useRoute().params

    console.log(id)

    const navigate = useNavigation()
    const goBack = () => navigate.goBack()
    const Dummie = () => console.log('Delete')

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)



    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                if (type == "SystemNotifications") {
                    ApiAxios.getSystemNotification({ id: id, setData: setData, token: token!, setLoading: setLoading })
                }
                else {
                    ApiAxios.getUerNotification({ id: id, setData: setData, token: token!, setLoading: setLoading })
                }
            })
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackRemoveHeader name="Notifiikasi" action={goBack} remove={Dummie} />
            <View style={STYLE_GLOBAL.ENTER40} />
            {
                isLoading ? <Loading /> :
                    <ScrollView>
                        <View style={styles.center}>
                            {
                                type == "SystemNotifications" ?
                                    <Image source={require("../assets/warning.png")} style={{ height: 50, width: 50 }} /> :
                                    <Image source={require("../assets/notif.png")} style={{ height: 50, width: 50 }} />


                            }
                            <View style={STYLE_GLOBAL.ENTER20} />
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2, styles.text]}>
                                {data.title}
                            </Text>
                            <View style={STYLE_GLOBAL.ENTER20} />
                            <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.CARD_GRID, styles.text]}>
                                {RemoveTagHTML(data.body)}
                            </Text>
                            <View style={STYLE_GLOBAL.ENTER20} />
                            <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.PAGE, styles.text]}>
                                {convertDete(data.created_at)}
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
    center: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        textAlign: 'center'
    }
})

export default NotificationDetail