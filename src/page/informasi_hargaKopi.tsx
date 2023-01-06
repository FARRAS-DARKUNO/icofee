import React from "react"
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

const InformasiHargaKopi = () => {

    const navigate = useNavigation()

    const goBack = () => navigate.goBack()

    const card = [
        {
            icon: "leaf",
            name: "Biji Kopi Mentah",
            //@ts-ignore
            action: () => navigate.navigate(NamePage.ListInformasiHargaKopi, {
                name: 'Biji Kopi Mentah',
                id: 1,
            }),
            color: "#DEEBD4"
        },
        {
            icon: "coffee",
            name: "Olahan Kopi",
            //@ts-ignore
            action: () => navigate.navigate(NamePage.ListInformasiHargaKopi, {
                name: 'Olahan Kopi',
                id: 2,
            }),
            color: "#E0D8D1",
        }
    ]

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.BackHeader name="Informasi Harga Kopi" action={goBack} />
            <View style={STYLE_GLOBAL.ENTER30} />
            <View style={styles.wrap}>
                {
                    card.map(data => (
                        <TouchableOpacity style={[styles.box, { backgroundColor: data.color }]} onPress={data.action} key={data.name}>
                            <Icons name={data.icon} size={30} color="#000" />
                            <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                                {data.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }

            </View>
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