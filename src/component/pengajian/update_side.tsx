import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'
import BoxInput from '../box_input'
import Button from '../button'
import STYLE_GLOBAL from '../../util/style_global'
import Alert from '../alert'
import Loading from '../loading'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ApiAxios from '../../util/axios'

const UpdateSide = () => {

    const valueNonPick = ['Tidak ada Produk']
    const [valuePick, setValuePick] = useState<any>([])
    const [id, setId] = useState<any>(null)
    const [token, setToken] = useState<any>(null)

    const [name, setName] = useState<string>('')
    const [pickName, setPickName] = useState<any>(null)
    const [data, setData] = useState<any>(null)
    const [priceBef, setPriceBef] = useState<string>('')
    const [priceAft, setPriceAft] = useState<string>('')
    const [image, setImage] = useState<any>(null)
    const [description, setDescription] = useState<string>('')
    const [isLoading, setLoading] = useState<any>(true)

    const action = () => {
        if (data.length == 0) {
            Alert.MistakeAlert({
                title: 'Tidak ada produk',
                massage: 'Produk belum ada yang di validasi'
            })
        }
        else if (name == '' || priceBef == '' || priceAft == '' || image == null || description == '' || pickName == null) {
            Alert.MistakeAlert({
                title: "Lengkapi Data",
                massage: 'Data yang anda input belum lengkap'
            })
        }
        else {
            setLoading(true)

            const finalData = new FormData()
            finalData.append('name', name)
            finalData.append('old_price', priceBef)
            finalData.append('new_price', priceAft)
            finalData.append('description', description)
            finalData.append('Thumbnail', image)

            console.log(token)

            ApiAxios.patchProduct({
                setLoading: setLoading,
                token: token,
                id: data[pickName - 2].id,
                value: finalData
            })

            setName('')
            setPickName(null)
            setPriceBef('')
            setPriceAft('')
            setDescription('')
            setImage(null)
        }
    }



    useEffect(() => {
        AsyncStorage.getItem('Token')
            .then(token => {
                AsyncStorage.getItem('Id')
                    .then(id => {
                        setId(id)
                        setToken(token)
                        ApiAxios.getListMyProduct({
                            id: id!,
                            token: token!,
                            setData: setData,
                            setLoading: setLoading,
                            setValue: setValuePick
                        })
                    })
            })
        return () => {
            setValuePick([])
        }
    }, [isLoading])
    return (
        <>
            {
                isLoading ? <Loading /> :
                    <View style={styles.container}>
                        <ScrollView style={{ height: "80%" }}>
                            <BoxInput.DropdownInputs tittle='Nama Produk' dropList={data.length == 0 ? valueNonPick : valuePick} picker={setPickName} />
                            <BoxInput.TextInputs tittle='Nama Baru' input={setName} values={name} />
                            <BoxInput.TextInputs tittle='Harga Sebelumnya' input={setPriceBef} values={priceBef} />
                            <BoxInput.TextInputs tittle='Harga Per Hari Ini' input={setPriceAft} values={priceAft} />
                            <BoxInput.ImagePickerInputs tittle='Foto Produk' picker={setImage} values={image} />
                            <BoxInput.TextInputs tittle='Deskripsi Produk' input={setDescription} values={description} />
                            <View style={STYLE_GLOBAL.ENTER10} />
                            <Button.NormalButton response={action} tiitle={'Simpan'} />
                        </ScrollView>

                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    textDescBox: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    textDesc: {
        textAlign: 'center'
    }
});

export default UpdateSide