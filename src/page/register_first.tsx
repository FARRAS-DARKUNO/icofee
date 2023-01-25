import React, { useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View
} from "react-native"
import Header from "../component/header"
import { useNavigation } from "@react-navigation/native"
import STYLE_GLOBAL from "../util/style_global"
import BoxInput from "../component/box_input"
import Button from "../component/button"
import NamePage from "../util/namePage"
import Alert from "../component/alert"

const RegisterFirst = () => {

    const valuePick = ["Petani", "Masyarakat Umum"]

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.RegisterLast, {
        name: name,
        number: number,
        role: pick,
        password: password,
    })

    const checkBefocheckBeforeNextreNext = () => {
        if (name == '' || number == '' || pick == '' || password == '' || rePassword == '') {
            Alert.MistakeAlert({
                title: "Terjadi Kesalahan",
                massage: "Lengkapi data diri anda"
            })
        }
        else if (password != rePassword) {
            Alert.MistakeAlert({
                title: "Terjadi Kesalahan",
                massage: "Masukan kata sandi anda dengan benar"
            })
        }
        else {
            gotoNext()
        }
    }

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [pick, setPick] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Registrasi" action={gotoBack} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView >
                <BoxInput.TextInputs tittle="Nama" input={setName} values={name} />
                <BoxInput.TextInputs tittle="Nomor Telepon" input={setNumber} values={number} />
                <BoxInput.DropdownInputs tittle="Daftar Sebagai..." dropList={valuePick} picker={setPick} values={pick} />
                <BoxInput.TextInputs tittle="Kata Sandi" input={setPassword} values={password} isPassword={true} />
                <BoxInput.TextInputs tittle="Kata Sandi" input={setRePassword} values={rePassword} isPassword={true} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={checkBefocheckBeforeNextreNext} tiitle="Selanjutnya" />
                <View style={STYLE_GLOBAL.ENTER20} />

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
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RegisterFirst