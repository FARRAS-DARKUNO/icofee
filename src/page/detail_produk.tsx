import React from "react"
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import { useNavigation } from "@react-navigation/native"
import Header from "../component/header"

const DetailProduk = () => {

    const navigate = useNavigation()
    const goback = () => navigate.goBack()

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    const setData = [
        {
            name: "Nama Usaha",
            data: "PT. Bangun Jaya"
        },
        {
            name: "Alamat",
            data: "Jl. Raden Salah, Jembatan Maju, bandar lampung "
        },
        {
            name: "Nomor Telepon",
            data: "088281923901023"
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Detail Produk" action={goback} />
            <View style={STYLE_GLOBAL.ENTER10} />
            <ScrollView>
                <View style={[styles.boxImage, styles.padding]}>
                    <Image source={{ uri: img }} style={styles.image} />
                </View>
                <View style={[styles.padding]}>
                    <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Bolu Kopi Keju</Text>
                    <Text style={[STYLE_GLOBAL.TERSIER_COLOR, STYLE_GLOBAL.HEADER3]}>
                        {"RP. 20000"}
                    </Text>
                    <View style={STYLE_GLOBAL.ENTER10} />
                    <Text style={[styles.textDetail, STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                        {text}
                    </Text>
                    <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2]}>Rincian Toko</Text>
                    {
                        setData.map((placement) => (
                            <View style={styles.boxStore}>
                                <View style={[styles.box50]}>
                                    <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.SECONDARY_COLOR]}>
                                        {placement.name}
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
                        {"RP. 20000"}
                    </Text>
                    <View style={STYLE_GLOBAL.ENTER40} />
                </View>
            </ScrollView>
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
        borderRadius: 10
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