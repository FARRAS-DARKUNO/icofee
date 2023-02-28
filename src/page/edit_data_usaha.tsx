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
import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiAxios, { editDataStore, mainLink } from "../util/axios"
import Loading from "../component/loading"
import Alert from "../component/alert"
import axios from "axios"


const EditDataUsaha = () => {

    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()
    //@ts-ignore
    const gotoNext = () => navigate.navigate(NamePage.NavigationBar)

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [kecamatan, setKecamatan] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [isLoading, setLoading] = useState<any>(false)

    const actions = () => {
        if (name != '' && number != '' && address != '' && kecamatan != '' && city != '') {

            setLoading(true)

            const finalData = new FormData()
            finalData.append('name', name)
            finalData.append('telephone', number)
            finalData.append('address', address)
            finalData.append('kab_or_kota', city)
            finalData.append('kecamatan', kecamatan)

            AsyncStorage.getItem("Token")
                .then(token => {
                    AsyncStorage.getItem("Id")
                        .then(id => {
                            //@ts-ignore
                            axios.post(mainLink + editDataStore, {
                                name: name,
                                telephone: number,
                                address: address,
                                kab_or_kota: city,
                                kecamatan: kecamatan,
                                user_id: id,
                            }, {
                                headers: {
                                    "Authorization": `Token ${token}`,
                                }
                            }).then(placemen => {
                                //@ts-ignore
                                setLoading(false)
                                console.log(placemen.data)

                                AsyncStorage.setItem('id_toko', placemen.data.id + '')
                            }).then(() => {
                                Alert.ActionAlert(
                                    {
                                        title: "Berhasil",
                                        massage: "Data berhasil berubah",
                                        action: gotoNext,
                                    }
                                )
                            }
                            )
                        })
                })
        }
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={styles.container}>
                        <Header.BackHeader name="Data Usaha" action={gotoBack} />
                        <View style={STYLE_GLOBAL.ENTER40} />
                        <ScrollView >
                            <BoxInput.TextInputs tittle="Nama Lengkap" input={setName} values={name} />
                            <BoxInput.TextInputs tittle="Nomor Telepon" input={setNumber} values={number} />
                            <BoxInput.TextInputs tittle="Alamat" input={setAddress} values={address} />
                            <BoxInput.TextInputs tittle="Kabupaten / Kota" input={setCity} values={city} />
                            <BoxInput.TextInputs tittle="Kecamatan" input={setKecamatan} values={kecamatan} />
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

export default EditDataUsaha