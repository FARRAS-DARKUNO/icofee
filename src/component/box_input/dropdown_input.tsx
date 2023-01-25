import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
} from 'react-native'
import STYLE_GLOBAL from '../../util/style_global';
import { BoxInputData } from '../../util/interface';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DropdownInputs = ({ picker, placeholders, tittle, values, dropList }: BoxInputData) => {



    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}>
                    {" " + tittle}
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <SelectDropdown
                    buttonStyle={styles.input}
                    buttonTextStyle={styles.text}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition="right"
                    data={dropList}
                    onSelect={(selectedItem, index) => {
                        let temp = index + 2
                        //@ts-ignore
                        picker(temp)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {

                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
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
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
    },
    line: {
        width: '100%',
        height: 1
    },
    text: {
        textAlign: 'left',
        marginLeft: -2
    }
});


export default DropdownInputs