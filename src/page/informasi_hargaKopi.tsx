import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import { useNavigation } from "@react-navigation/native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import NamePage from "../util/namePage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"

const InformasiHargaKopi = () => {

    const navigate = useNavigation()

    const goBack = () => navigate.goBack()
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState<boolean>(true)

    const navigater = (name: string, id: number) => {
        //@ts-ignore
        navigate.navigate(NamePage.ListInformasiHargaKopi, {
            name: name,
            id: id,
        })
    }

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getTypepriceInformation({ setLoading: setLoading, token: token!, setData: setData })
            })
    }, [isLoading])

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.BackHeader name="Informasi Harga Kopi" action={goBack} />
            <View style={STYLE_GLOBAL.ENTER30} />
            {
                isLoading ? <Loading /> :
                    <View style={styles.wrap}>
                        {
                            data.map((placement: any) => (
                                <TouchableOpacity
                                    style={[styles.box, { backgroundColor: placement.id == 1 ? "#DEEBD4" : "#E0D8D1" }]}
                                    onPress={() => navigater(placement.product_type_name, placement.id)}
                                    key={placement.product_type_name}
                                >
                                    <Icons name={placement.id == 1 ? "coffee" : "leaf"} size={30} color="#000" />
                                    <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                                        {placement.product_type_name}
                                    </Text>
                                </TouchableOpacity>
                            ))
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
    wrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    box: {
        height: 90,
        width: '49%',
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 30
    }
})

export default InformasiHargaKopi