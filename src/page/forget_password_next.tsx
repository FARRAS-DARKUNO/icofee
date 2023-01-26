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
import { useNavigation, useRoute } from "@react-navigation/native"
import NamePage from "../util/namePage"
import Alert from "../component/alert"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"

const ForgetPasswordLast = () => {

    const navigate = useNavigation()
    //@ts-ignore
    const { id } = useRoute().params

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const goNextPage = () => navigate.navigate(NamePage.LandingPage)

    console.log("hallo", id)
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false)

    const putData = () => {
        if (password == '' || rePassword == '') {
            Alert.MistakeAlert(
                {
                    title: "Terjadi Kesalahan",
                    massage: "Lengkapi Password",
                }
            )
        }
        else if (password != rePassword) {
            Alert.MistakeAlert(
                {
                    title: "Terjadi Kesalahan",
                    massage: "Masukan password yang benar",
                }
            )
        }
        else {
            setLoading(true)
            let temp = {
                password: password
            }

            ApiAxios.putChangePassword({ action: goNextPage, data: temp, setLoading: setLoading, value: id })
        }
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={styles.container}>
                        <Header.BackHeader name="Lupa Sandi" action={gotoBack} />
                        <View style={STYLE_GLOBAL.ENTER40} />
                        <ScrollView >
                            <BoxInput.TextInputs tittle="Kata Sandi" input={setPassword} values={password} isPassword={true} />
                            <BoxInput.TextInputs tittle="Ulangi Kata Sandi" input={setRePassword} values={rePassword} isPassword={true} />
                            <View style={STYLE_GLOBAL.ENTER40} />
                            <Button.NormalButton response={putData} tiitle="Simpan" />
                        </ScrollView>
                    </SafeAreaView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
})

export default ForgetPasswordLast