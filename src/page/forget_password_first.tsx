import React, { useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import Header from "../component/header"
import BoxInput from "../component/box_input"
import Button from "../component/button"
import STYLE_GLOBAL from "../util/style_global"
import { useNavigation } from "@react-navigation/native"
import NamePage from "../util/namePage"

const ForgetPasswordFirst = () => {

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const goNextPage = () => navigate.navigate(NamePage.ForgetPasswordLast)

    const [username, setUsername] = useState<string>('')
    const [nik, setNik] = useState<string>('')

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Lupa Sandi" action={gotoBack} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView >
                <BoxInput.TextInputs tittle="Username" input={setUsername} values={username} />
                <BoxInput.TextInputs tittle="Nomor NIK" input={setNik} values={nik} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={goNextPage} tiitle="Selanjutnya" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
})

export default ForgetPasswordFirst