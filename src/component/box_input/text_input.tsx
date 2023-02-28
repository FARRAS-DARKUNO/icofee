import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
} from 'react-native'
import STYLE_GLOBAL from '../../util/style_global';
import { BoxInputData } from '../../util/interface';

const TextInputs = ({ input, placeholders, tittle, values, isPassword, }: BoxInputData) => {

    let temp = isPassword || false

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}>
                    {" " + tittle}
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={[styles.input, STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}
                    onChangeText={input}
                    value={values}
                    placeholder={placeholders}
                    secureTextEntry={temp}
                />
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
        height: 1.3
    }
});


export default TextInputs