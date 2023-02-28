import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import Card from "../component/card"
import ApiAxios from "../util/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Loading from "../component/loading"
import convertDete from "../util/convert_dete"

const Notification = () => {

    const [data, setdata] = useState<any>(null)
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                if (token == null) {
                    //@ts-ignore
                    navigate.navigate(NamePage.LandingPage)
                }
                AsyncStorage.getItem("Id")
                    .then(id => {
                        ApiAxios.getAllNotification({ id: id!, token: token!, setLoading: setLoading, setData: setdata })
                    })
            })
    }, [])

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.HeaderTittle name="Pemberitahuan" />
            <View style={STYLE_GLOBAL.ENTER20} />
            <View style={styles.scroll}>
                {
                    isLoading ? <Loading /> :
                        <ScrollView >
                            {
                                data.map((placement: any) => (
                                    <Card.NotificationCard
                                        tittle={placement.title}
                                        time={convertDete(placement.created_at)}
                                        type={placement.type}
                                        id={placement.id}
                                        key={placement.created_at}
                                    />
                                ))
                            }
                        </ScrollView>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        height: "82%"
    }
})

export default Notification