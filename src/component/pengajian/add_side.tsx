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

const AddSide = () => {

    const valuePick = ["Olahan", "Mentah"]

    const Dummie = () => console.log("masuk")

    const [name, setName] = useState<string>('')
    const [pick, setPick] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [image, setImage] = useState<any>(null)
    const [description, setDescription] = useState<string>('')

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: "76%" }}>
                <BoxInput.TextInputs tittle='Nama Produk' input={setName} values={name} />
                <BoxInput.DropdownInputs tittle='Jenis Produk' dropList={valuePick} input={setPick} />
                <BoxInput.TextInputs tittle='Harga Per Hari Ini' input={setPrice} values={price} />
                <BoxInput.ImagePickerInputs tittle='Foto Produk' picker={setImage} values={image} />
                <BoxInput.TextInputs tittle='Deskripsi Produk' input={setDescription} values={description} />
                <View style={styles.textDescBox}>
                    <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE, styles.textDesc]}>
                        Pastikan anda sudah melengkapi data usaha anda pada
                        <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.PAGE]} onPress={Dummie}>
                            {" Halaman Ini"}
                        </Text>
                    </Text>

                </View>
                <Button.NormalButton response={Dummie} tiitle={'Ajukan'} />
                <View style={STYLE_GLOBAL.ENTER30} />
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

export default AddSide