import React, { useEffect, useState } from "react"
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
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios from "../util/axios"
import Loading from "../component/loading"

const EditProfil = () => {

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.NavigationBar)

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [profile, setProfile] = useState<any>(null)
    const [isLoading, setLoading] = useState<any>(false)

    const actions = () => {
        setLoading(true)

        const finalData = new FormData()
        finalData.append('name', name)
        finalData.append('profile_pic', profile)
        finalData.append('telephone_number', number)
        finalData.append('address', address)
        AsyncStorage.getItem("Token")

            .then(token => {
                AsyncStorage.getItem("Id")
                    .then(id => {
                        //@ts-ignore
                        ApiAxios.pastchEditProfile({
                            token: token!,
                            setLoading: setLoading,
                            value: finalData,
                            id: id!,
                            action: gotoNext
                        })
                    })
            })
    }

    useEffect(() => {

    }, [isLoading])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={styles.container}>
                        <Header.BackHeader name="Edit Profil" action={gotoBack} />
                        <View style={STYLE_GLOBAL.ENTER40} />
                        <ScrollView >
                            <BoxInput.TextInputs tittle="Nama Lengkap" input={setName} values={name} />
                            <BoxInput.TextInputs tittle="Nomor Telepon" input={setNumber} values={number} />
                            <BoxInput.TextInputs tittle="Alamat" input={setAddress} values={address} />
                            <BoxInput.ImagePickerInputs tittle="Foto Profil" picker={setProfile} values={profile} />
                            <View style={STYLE_GLOBAL.ENTER40} />
                            <Button.NormalButton response={actions} tiitle="Simpan" />
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

export default EditProfil