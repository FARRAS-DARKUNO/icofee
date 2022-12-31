import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"

const Terverifikasi = () => {
    return (
        <View style={[
            styles.container, STYLE_GLOBAL.BACKGROUND_GREEN
        ]}>
            <Text style={[STYLE_GLOBAL.WHITE_COLOR, STYLE_GLOBAL.HEADER3]}>
                Terverifikasi
            </Text>
        </View>
    )
}

const BelumTerverifikasi = () => {
    return (
        <View style={[
            styles.container, STYLE_GLOBAL.BACKGROUND_RED
        ]}>
            <Text style={[STYLE_GLOBAL.WHITE_COLOR, STYLE_GLOBAL.HEADER3]}>
                Belum Terverifikasi
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const CheckVerified = {
    Terverifikasi,
    BelumTerverifikasi
}

export default CheckVerified
