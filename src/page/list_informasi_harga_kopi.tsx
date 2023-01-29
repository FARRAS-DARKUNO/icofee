import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import Header from "../component/header"
import { useRoute, useNavigation } from "@react-navigation/native"
import STYLE_GLOBAL from "../util/style_global"
import Card from "../component/card"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"
import RemoveTagHTML from "../util/remove_tag_html"
import convertPersen from "../util/convert_persen"

const ListInformasiHargaKopi = () => {

    //@ts-ignore
    const { name, id } = useRoute().params

    const navigate = useNavigation()

    const goBack = () => navigate.goBack()

    const dummie = () => console.log('Masuk')

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)


    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getListProductPrice({ setLoading: setLoading, token: token!, setData: setData, id: id })
            })
    }, [])

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.BackHeader name={name} action={goBack} />
            <View style={STYLE_GLOBAL.ENTER10} />
            {
                isLoading ? <Loading /> :
                    <ScrollView>
                        {
                            data.map((placement: any,) => (
                                <Card.PriceCard
                                    tittle={placement.name}
                                    body={RemoveTagHTML(placement.description)}
                                    isUpgrade={placement.new_price >= placement.old_price ? 1 : 0}
                                    image={placement.thumbnail}
                                    price={placement.new_price}
                                    persen={convertPersen(placement.new_price, placement.old_price)}
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
    },
})

export default ListInformasiHargaKopi