import React from "react"
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
import { useNavigation } from "@react-navigation/native"

const NotificationDetail = () => {

    const navigate = useNavigation()
    const goBack = () => navigate.goBack()
    const Dummie = () => console.log('Delete')
    return (
        <SafeAreaView style={styles.container}>
            <Header.BackRemoveHeader name="Notifiikasi" action={goBack} remove={Dummie} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView>
                <View style={styles.center}>
                    <Image source={require("../assets/warning.png")} style={{ height: 50, width: 50 }} />
                    <View style={STYLE_GLOBAL.ENTER20} />
                    <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.HEADER2, styles.text]}>
                        Akun anda sudah diferifikasi
                    </Text>
                    <View style={STYLE_GLOBAL.ENTER20} />
                    <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.CARD_GRID, styles.text]}>
                        Akun anda sudah diferifikasi shain idnsiond dnasinxosaijsand aidniuasndisa dosa dosa djsa diosa d
                    </Text>
                    <View style={STYLE_GLOBAL.ENTER20} />
                    <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.PAGE, styles.text]}>
                        99 JHUB 0911
                    </Text>
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