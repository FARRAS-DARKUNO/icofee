import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Text,
} from 'react-native'
import STYLE_GLOBAL from '../../util/style_global';
import { BoxInputData } from '../../util/interface';
import Button from '../button';
import DatePicker from 'react-native-date-picker'

const DateInput = ({ tittle, input, values, }: BoxInputData) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const openDate = () => {
        setOpen(true)
    }

    const setConvertDate = (data: Date) => {
        let tempDate = ''
        let tempMonth = ''
        let fullconvert = ''

        data.getDate() % 10 == data.getDate()
            ? tempDate = "0" + data.getDate()
            : tempDate = "" + data.getDate()

        data.getMonth() % 10 == data.getMonth()
            ? tempMonth = "0" + (data.getMonth() + 1)
            : tempMonth = "" + (data.getMonth() + 1)

        fullconvert = data.getFullYear() + '-' + tempMonth + '-' + tempDate

        return fullconvert
    }


    return (
        <>
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    //@ts-ignore
                    input(setConvertDate(date))

                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
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
                                {values == '' ? 'Pilih Tanggal' : values}
                            </Text>
                        </View>
                        <View style={styles.wide40}>
                            <Button.ChoiceButton response={openDate} />
                        </View>
                    </View>
                </View>
                <View style={[styles.line, STYLE_GLOBAL.BACKGROUND_TERSIER]} />
            </View>
        </>
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

export default DateInput