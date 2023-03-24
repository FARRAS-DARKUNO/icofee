import React, { useEffect, useState } from "react"
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
import NamePage from "../util/namePage"
import ApiAxios from "../util/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Loading from "../component/loading"
import RemoveTagHTML from "../util/remove_tag_html"
import convertDete from "../util/convert_dete"

const InformasiBudiDaya = () => {
    const navigate = useNavigation()

    const goBack = () => navigate.goBack()

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)

    const [isLoading2, setLoading2] = useState<boolean>(true)
    const [data2, setData2] = useState<any>(null)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getCategoryArticle({ setData: setData, token: token!, setLoading: setLoading })
                ApiAxios.getListArticle({ setData: setData2, token: token!, setLoading: setLoading2 })
            })
    }, [])

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.BackHeader name="Informasi dan Artikel Budidaya" action={goBack} />
            <View style={STYLE_GLOBAL.ENTER20} />
            {
                isLoading
                    ? <Loading />
                    : <View style={{ height: "93%" }}>
                        {
                            data.map((datas: any) => (
                                <Button.NextButton
                                    //@ts-ignore
                                    response={() => navigate.navigate(NamePage.DinamicListInformation, { name: datas.category_name, id: datas.id })}
                                    tiitle={datas.category_name} iconLeft={'chevron-right'} key={datas.id}
                                />
                            ))
                        }
                        <View style={STYLE_GLOBAL.ENTER10} />
                        <View style={styles.box}>
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.INFORMATION]}> Informasi Terkini</Text>
                        </View>
                        {
                            isLoading2 ? <Loading /> :
                                <ScrollView>
                                    {
                                        data2.map((placement: any) => (
                                            <Card.InformationCard
                                                tittle={placement.title}
                                                body={RemoveTagHTML(placement.body)}
                                                image={placement.thumbnail}
                                                time={convertDete(placement.created_at)}
                                                id={placement.id}
                                                key={placement.id}
                                            />
                                        ))
                                    }
                                </ScrollView>
                        }
                    </View>
            }

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