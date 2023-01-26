import React, { useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import Header from "../component/header"
import { useNavigation } from "@react-navigation/native"
import STYLE_GLOBAL from "../util/style_global"
import BoxInput from "../component/box_input"
import Button from "../component/button"
import NamePage from "../util/namePage"
import Loading from "../component/loading"
import ApiAxios, { loginLink, mainLink } from "../util/axios"
import Alert from "../component/alert"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = () => {
    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const goNextPage = () => navigate.navigate(NamePage.ForgetPasswordFirst)
    //@ts-ignore
    const goNavigationBar = () => navigate.navigate(NamePage.NavigationBar)


    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isLoading, setLoading] = useState<boolean>(false)

    const postData = async () => {

        axios.post(mainLink + loginLink, {
            username: username,
            password: password,
        })
            .then(placement => {
                AsyncStorage.setItem("Token", placement.data.token)
                    .then(() => {
                        AsyncStorage.setItem("Id", placement.data.user.id.toString())
                            .then(() => {
                                setLoading(false)
                                Alert.ActionAlert(
                                    {
                                        title: "Login Berhasil",
                                        massage: "Anda berhasil melakukan Login",
                                        action: goNavigationBar,
                                    }
                                )
                            })
                    })
                //@ts-ignore

            })
            .catch(err => {
                setLoading(false)
                Alert.MistakeAlert(
                    {
                        title: "Terjadi Kesalahan",
                        massage: "Username atau Password salah"
                    }
                )
            })
    }

    const checkData = () => {
        if (username == '' || password == '') {
            Alert.MistakeAlert(
                {
                    title: "Terjadi Kesalahan",
                    massage: "Lengkapi data diri dengan benar"
                }
            )
        }
        else {
            setLoading(true)
            postData()
        }
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={styles.container}>
                        <Header.BackHeader name="Masuk" action={gotoBack} />
                        <View style={STYLE_GLOBAL.ENTER40} />
                        <ScrollView >
                            <BoxInput.TextInputs tittle="Username" input={setUsername} values={username} />
                            <BoxInput.TextInputs tittle="Kata Sandi" input={setPassword} values={password} isPassword={true} />
                            <View style={STYLE_GLOBAL.ENTER40} />
                            <Button.NormalButton response={checkData} tiitle="Masuk" />
                            <View style={STYLE_GLOBAL.ENTER20} />
                            <View style={styles.center}>
                                <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                                    Lupa kata sandi ?
                                    <Text
                                        style={[STYLE_GLOBAL.TERSIER_COLOR, STYLE_GLOBAL.PAGE]}
                                        onPress={goNextPage}
                                    >
                                        {" Klik Sini"}
                                    </Text>
                                </Text>
                            </View>
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
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login