import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import { useNavigation, useRoute } from "@react-navigation/native"
import Header from "../component/header"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"

const DetailML = () => {

    //@ts-ignore
    const { image } = useRoute().params

    console.log(image)

    const [data, setData] = useState<any>(null)

    const navigate = useNavigation()
    const goback = () => navigate.goBack()

    const [isLoading, setLoading] = useState<boolean>(true)

    const getData = () => {
        AsyncStorage.getItem("Token").then(token => {
            AsyncStorage.getItem("Id").then(id => {
                const finalData = new FormData()

                finalData.append('picture', image)
                finalData.append('user_id', id)

                ApiAxios.postML({
                    setLoading: setLoading,
                    token: token!,
                    value: finalData,
                    setValue: setData
                })
            })
        })

    }

    useEffect(() => {
        getData()
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Detail Data" action={goback} />
            <View style={STYLE_GLOBAL.ENTER10} />
            {
                isLoading ? <Loading /> :
                    <ScrollView>

                        <View style={[styles.padding]}>
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Hasil dari Foto</Text>
                            <View style={STYLE_GLOBAL.ENTER30} />
                            <Text style={[styles.textDetail, STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                                {data.result}
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

export default DetailML