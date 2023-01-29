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
import RemoveTagHTML from "../util/remove_tag_html"

const DetailProduk = () => {

    const navigate = useNavigation()
    const goback = () => navigate.goBack()
    //@ts-ignore
    const { id } = useRoute().params

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setDatas] = useState<any>(null)
    const [coloum, setColoum] = useState<any>(null)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getDetailProduct({
                    setLoading: setLoading,
                    token: token!,
                    setData: setDatas,
                    id: id,
                    setStatus: setColoum
                })
            })
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Detail Produk" action={goback} />
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
                                {`RP. ${data.new_price}`}
                            </Text>
                            <View style={STYLE_GLOBAL.ENTER10} />
                            <Text style={[styles.textDetail, STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                                {RemoveTagHTML(data.description)}
                            </Text>
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Rincian Toko</Text>
                            {
                                coloum.map((placement: any) => (
                                    <View style={styles.boxStore} key={placement.tittle}>
                                        <View style={[styles.box50]}>
                                            <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.SECONDARY_COLOR]}>
                                                {placement.tittle}
                                            </Text>
                                        </View>
                                        <View style={[styles.box50]}>
                                            <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}>
                                                {placement.data}
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                            <View style={STYLE_GLOBAL.ENTER20} />
                            <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Harga Sebelumnya</Text>
                            <Text style={[STYLE_GLOBAL.TERSIER_COLOR, STYLE_GLOBAL.HEADER3]}>
                                {`RP. ${data.old_price}`}
                            </Text>
                            <View style={STYLE_GLOBAL.ENTER40} />
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
    boxStore: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 5,
        justifyContent: "space-between"
    },
    box50: {
        width: '49.5%',
        justifyContent: 'center',
    }

})

export default DetailProduk