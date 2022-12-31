import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
import STYLE_GLOBAL from '../../util/style_global';
import { BoxInputData } from '../../util/interface';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '../button';

const ImagePickerInputs = ({ picker, placeholders, tittle, values }: BoxInputData) => {

    const option: any = {
        title: 'Pilih Gambar',
        type: 'library',
        option: {
            selectionLimit: 1,
            mediaType: 'photo',
        }
    }

    const openGalery = async () => {
        const imagesKTP: any = await launchImageLibrary(option);
        if (imagesKTP.didCancel) {
            console.log('cancel Image')
        } else if (imagesKTP.errorCode) {
            console.log(imagesKTP.errorMessage)
        } else {
            const source = { uri: imagesKTP.assets[0].uri }
            //@ts-ignore
            picker(source)
            console.log(source)
            console.log(imagesKTP.assets[0].fileName)
        }

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}>
                    {" " + tittle}
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.inputArea}>
                    <View style={styles.wide60}>
                        <Text
                            style={[styles.textdest, STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            {values != null ? values['uri'].substring(values['uri'].lastIndexOf('/') + 1) : 'Pilih Foto'}
                        </Text>
                    </View>
                    <View style={styles.wide40}>
                        <Button.ChoiceButton response={openGalery} />
                    </View>
                </View>
            </View>
            <View style={[styles.line, STYLE_GLOBAL.BACKGROUND_TERSIER]} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    input: {
        // backgroundColor: 'red',
        height: 40,
    },
    line: {
        width: '100%',
        height: 1
    },
    inputArea: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textdest: {
        margin: 4,
    },
    wide60: {
        width: '65%'
    },
    wide40: {
        flexDirection: 'row-reverse',
        width: '35%'
    }
});


export default ImagePickerInputs