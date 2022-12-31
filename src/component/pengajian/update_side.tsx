import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'
import BoxInput from '../box_input'
import Button from '../button'
import STYLE_GLOBAL from '../../util/style_global'

const UpdateSide = () => {

    const valuePick = ["Olahan", "Mentah"]

    const Dummie = () => console.log("masuk")
    const [name, setName] = useState<string>('')
    const [priceBef, setPriceBef] = useState<string>('')
    const [priceAft, setPriceAft] = useState<string>('')
    const [image, setImage] = useState<any>(null)
    const [description, setDescription] = useState<string>('')


    return (
        <View style={styles.container}>
            <ScrollView style={{ height: "80%" }}>
                <BoxInput.TextInputs tittle='Nama Produk' input={setName} values={name} />
                <BoxInput.TextInputs tittle='Harga Sebelumnya' input={setPriceBef} values={priceBef} />
                <BoxInput.TextInputs tittle='Harga Per Hari Ini' input={setPriceAft} values={priceAft} />
                <BoxInput.ImagePickerInputs tittle='Foto Produk' picker={setImage} values={image} />
                <BoxInput.TextInputs tittle='Deskripsi Produk' input={setDescription} values={description} />
                <View style={STYLE_GLOBAL.ENTER10} />
                <Button.NormalButton response={Dummie} tiitle={'Simpan'} />
            </ScrollView>

        </View>
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