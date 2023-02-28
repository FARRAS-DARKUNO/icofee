import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import BoxInput from '../box_input'
import STYLE_GLOBAL from '../../util/style_global'
import Button from '../button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ApiAxios from '../../util/axios'
import NamePage from '../../util/namePage'
import Alert from '../alert'
import Loading from '../loading'
import { useNavigation } from '@react-navigation/native'

const AddSide = () => {

    const navigate = useNavigation()

    const valuePick = ["Olahan", "Mentah"]
    const [name, setName] = useState<string>('')
    const [pick, setPick] = useState<any>(null)
    const [priceOld, setPriceOld] = useState<number>(0)
    const [priceNew, setPriceNew] = useState<number>(0)
    const [image, setImage] = useState<any>(null)
    const [description, setDescription] = useState<string>('')
    const [isLoading, setLoading] = useState<any>(false)

    //@ts-ignore
    const gotoNext = () => {
        setName('')
        setPick(null)
        setPriceOld(0)
        setPriceNew(0)
        setImage(null)
        setDescription('')
    }
    //@ts-ignore
    const gotoEdit = () => navigate.navigate(NamePage.EditDataUsaha)

    const onTab = () => {
        AsyncStorage.getItem('id_toko')
            .then(id_toko => {
                if (id_toko != null) {
                    setLoading(true)
                    const finalData = new FormData()
                    finalData.append('store_id', parseInt(id_toko))
                    finalData.append('name', name)
                    finalData.append('product_type_id', (pick - 1))
                    finalData.append('old_price', priceOld)
                    finalData.append('new_price', priceNew)
                    finalData.append('description', description)
                    finalData.append('thumbnail', image)
                    finalData.append('verified', "0")

                    AsyncStorage.getItem("Token")
                        .then(token => {
                            ApiAxios.postAddProduct({
                                token: token!,
                                setLoading: setLoading,
                                value: finalData,
                                action: gotoNext
                            })
                        }).then(() => {

                            Alert.ActionAlert(
                                {
                                    title: "Berhasil",
                                    massage: "Data Berhasil Ditambahkan",
                                    action: gotoNext,
                                }
                            )
                        })
                }
                else {
                    Alert.ActionAlert(
                        {
                            title: "Lengkapi data",
                            massage: "Lengkapi data usaha terlebih dahulu",
                            action: gotoEdit,
                        }
                    )
                }
            })
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <View style={styles.container}>
                        <ScrollView style={{ height: "100%" }}>
                            <BoxInput.TextInputs tittle='Nama Produk' input={setName} values={name} />
                            <BoxInput.DropdownInputs tittle='Jenis Produk' dropList={valuePick} picker={setPick} />
                            <BoxInput.TextInputs tittle='Harga Lama' input={setPriceOld} values={priceOld} />
                            <BoxInput.TextInputs tittle='Harga Baru' input={setPriceNew} values={priceNew} />
                            <BoxInput.ImagePickerInputs tittle='Foto Produk' picker={setImage} values={image} />
                            <BoxInput.TextInputs tittle='Deskripsi Produk' input={setDescription} values={description} />
                            <View style={styles.textDescBox}>
                                <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE, styles.textDesc]}>
                                    Pastikan anda sudah melengkapi data usaha anda pada
                                    <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.PAGE]} onPress={gotoEdit}>
                                        {" Halaman Ini"}
                                    </Text>
                                </Text>

                            </View>
                            <Button.NormalButton response={onTab} tiitle={'Ajukan'} />
                            <View style={STYLE_GLOBAL.ENTER30} />
                        </ScrollView>

                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 40,
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

export default AddSide