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

const RegisterLast = () => {

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.Login)

    const [nik, setNik] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [ktp, setKtp] = useState<any>(null)
    const [profile, setProfile] = useState<any>(null)

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Registrasi" action={gotoBack} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView >
                <BoxInput.TextInputs tittle="Nik KTP" input={setNik} values={nik} />
                <BoxInput.TextInputs tittle="Alamat" input={setAddress} values={address} />
                <BoxInput.ImagePickerInputs tittle="Foto KTP" picker={setKtp} values={ktp} />
                <BoxInput.ImagePickerInputs tittle="Foto Profil" picker={setProfile} values={profile} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={gotoNext} tiitle="Daftar" />
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

export default RegisterLast