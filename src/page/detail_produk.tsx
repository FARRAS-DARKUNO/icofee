import React from "react"
import {
    Text,
    StyleSheet,
    View
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"

const DetailProduk = () => {
    return (
        <View style={styles.container}>
            <Text> this DetailProduk</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
})

export default DetailProduk