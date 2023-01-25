import React, { useState, useEffect } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View
} from "react-native"
import Header from "../component/header"
import { useNavigation, useRoute } from "@react-navigation/native"
import STYLE_GLOBAL from "../util/style_global"
import BoxInput from "../component/box_input"
import Button from "../component/button"
import NamePage from "../util/namePage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"
import Alert from "../component/alert"

const RegisterLast = () => {

    const navigate = useNavigation()

    //@ts-ignore
    const { name, number, role, password } = useRoute().params

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.Login)

    const [isLoading, setLoading] = useState<boolean>(false)

    const [username, setUsername] = useState<string>('')
    const [nik, setNik] = useState<string>('')
    const [date, setDate] = useState<any>('')
    const [address, setAddress] = useState<string>('')
    const [ktp, setKtp] = useState<any>(null)
    const [profile, setProfile] = useState<any>(null)

    const checkBefocheckBeforeNextreNext = () => {
        if (username == '' || nik == '' || date == '' || address == '' || ktp == null || profile == null) {
            Alert.MistakeAlert({
                title: "Terjadi Kesalahan",
                massage: "Lengkapi data diri anda"
            })
        }
        else {
            postRegister()
        }
    }

    const postRegister = () => {

        setLoading(true)

        const finalData = new FormData()
        finalData.append('username', username)
        finalData.append('password', password)
        finalData.append('name', name)
        finalData.append('profile_pic', profile)
        finalData.append('role', role)
        finalData.append('birth', date)
        finalData.append('telephone_number', number)
        finalData.append('address', address)
        finalData.append('nik', nik)
        finalData.append('ktp_pic', ktp)
        finalData.append('verification_status', "0")

        ApiAxios.postRegistration({ data: finalData, action: gotoNext, setLoading: setLoading })
    }



    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={styles.container}>
                        <Header.BackHeader name="Registrasi" action={gotoBack} />
                        <View style={STYLE_GLOBAL.ENTER40} />
                        <ScrollView >
                            <BoxInput.TextInputs tittle="Username" input={setUsername} values={username} />
                            <BoxInput.TextInputs tittle="Nik KTP" input={setNik} values={nik} />
                            <BoxInput.TextInputs tittle="Alamat" input={setAddress} values={address} />
                            <BoxInput.DateInput tittle="Tangal Lahir" input={setDate} values={date} />
                            <BoxInput.ImagePickerInputs tittle="Foto KTP" picker={setKtp} values={ktp} />
                            <BoxInput.ImagePickerInputs tittle="Foto Profil" picker={setProfile} values={profile} />
                            <View style={STYLE_GLOBAL.ENTER40} />
                            <Button.NormalButton response={checkBefocheckBeforeNextreNext} tiitle="Daftar" />
                            <View style={STYLE_GLOBAL.ENTER20} />

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

export default RegisterLast