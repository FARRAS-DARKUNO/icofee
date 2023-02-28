import React, { useEffect, useState } from "react"
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
import ApiAxios from "../util/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import RemoveTagHTML from "../util/remove_tag_html"
import convertDete from "../util/convert_dete"
import Loading from "../component/loading"

const DinamicListInformation = () => {

    const navigate = useNavigation()
    const goBack = () => navigate.goBack()
    //@ts-ignore
    const { name, id } = useRoute().params

    const [text, onChangeText] = React.useState<string>("")
    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getlistArticleBySearch({
                    setLoading: setLoading,
                    token: token!,
                    id: id,
                    setData: setData,
                    value: text,
                })
            })
    }, [isLoading, text])

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
            {
                isLoading ? <Loading /> :
                    <ScrollView>
                        {
                            data.length == 0 ? <Loading /> : data.map((placement: any) => (
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