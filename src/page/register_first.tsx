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

const RegisterFirst = () => {

    const valuePick = ["Olahan", "Mentah"]

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.RegisterLast)

    const [name, setName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
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
                <BoxInput.TextInputs tittle="Username" input={setUsername} values={username} />
                <BoxInput.TextInputs tittle="Nomor Telepon" input={setNumber} values={number} />
                <BoxInput.DropdownInputs tittle="Daftar Sebagai..." dropList={valuePick} input={setPick} values={pick} />
                <BoxInput.TextInputs tittle="Kata Sandi" input={setPassword} values={password} />
                <BoxInput.TextInputs tittle="Kata Sandi" input={setRePassword} values={rePassword} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={gotoNext} tiitle="Selanjutnya" />
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