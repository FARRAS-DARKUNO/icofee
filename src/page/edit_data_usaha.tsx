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


const EditDataUsaha = () => {

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.Login)

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [kecamatan, setKecamatan] = useState<string>('')
    const [city, setCity] = useState<string>('')


    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Data Usaha" action={gotoBack} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView >
                <BoxInput.TextInputs tittle="Nama Lengkap" input={setName} values={name} />
                <BoxInput.TextInputs tittle="Nomor Telepon" input={setNumber} values={number} />
                <BoxInput.TextInputs tittle="Alamat" input={setAddress} values={address} />
                <BoxInput.TextInputs tittle="Alamat" input={setKecamatan} values={kecamatan} />
                <BoxInput.TextInputs tittle="Alamat" input={setCity} values={city} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={gotoNext} tiitle="Simpan" />
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

export default EditDataUsaha