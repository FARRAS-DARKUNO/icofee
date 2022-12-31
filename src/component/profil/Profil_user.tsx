import React from "react"
import {
    Text,
    StyleSheet,
    View,
    Image
} from "react-native"
import { HeaderData } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"
import CheckVerified from "../verification/ceck_verified"

const ProfilUser = ({ name, image, nicname, status }: HeaderData) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.box}>
                <Text style={[STYLE_GLOBAL.HEADER3, STYLE_GLOBAL.BLACK_COLOR]}>
                    {name}
                </Text>
                <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                    {nicname}
                </Text>
                <View style={STYLE_GLOBAL.ENTER10} />
                {
                    status == 1 ? <CheckVerified.Terverifikasi /> : <CheckVerified.BelumTerverifikasi />
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        height: 120,
        paddingHorizontal: 20,
        flexDirection: "row"
    },
    image: {
        height: "100%",
        width: 120,
        borderRadius: 1000,
        marginRight: 10,
    },
    box: {
        height: "100%",
        width: "62%",
        justifyContent: 'center',
    }
})

export default ProfilUser