import React from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    Image
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Button from "../component/button"
import { useNavigation } from "@react-navigation/native"
import NamePage from "../util/namePage"

const LandingPage = () => {

    const navigate = useNavigation()

    //@ts-ignore
    const gotoLogin = () => navigate.navigate(NamePage.Login)
    //@ts-ignore
    const gotoRegister = () => navigate.navigate(NamePage.RegisterFirst)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <View style={styles.main}>
                <Image source={require("../assets/itera.png")} style={{ height: 70, width: 70 }} />
                <View style={styles.box}>
                    <Button.NormalButton response={gotoLogin} tiitle="Masuk" />
                    <View style={STYLE_GLOBAL.ENTER20} />
                    <Button.RegisterButton response={gotoRegister} tiitle="Daftar" />
                </View>
                <View style={styles.bulet} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
    main: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    bulet: {
        width: '130%',
        height: 240,
        backgroundColor: STYLE_GLOBAL.BACKGROUND_PREMIER.backgroundColor,
        borderTopEndRadius: 1000,
        borderTopStartRadius: 1000,
        top: 155
    },
    box: {
        width: '100%',
    }
})

export default LandingPage