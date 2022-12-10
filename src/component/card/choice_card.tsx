import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from "react-native"
import { CardProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const dummie = () => console.log("masuk")

export const ChoiceAdd = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box50, STYLE_GLOBAL.BACKGROUND_TERSIER]}>
                <Icons name={'plus'} size={30} color="#fff" />
                <Text style={[STYLE_GLOBAL.WHITE_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                    Tambah Produk
                </Text>
            </View>
            <TouchableOpacity style={[styles.box50, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={dummie}>
                <Icons name={'upload'} size={30} color={STYLE_GLOBAL.SECONDARY_COLOR.color} />
                <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                    Update Produk
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export const ChoiceUpgrade = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.box50, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={dummie}>
                <Icons name={'plus'} size={30} color={STYLE_GLOBAL.SECONDARY_COLOR.color} />
                <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                    Tambah Produk
                </Text>

            </TouchableOpacity>
            <View style={[styles.box50, STYLE_GLOBAL.BACKGROUND_TERSIER]}>
                <Icons name={'upload'} size={30} color="#fff" />
                <Text style={[STYLE_GLOBAL.WHITE_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                    Update Produk
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box50: {
        height: '100%',
        width: '49%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: STYLE_GLOBAL.BACKGROUND_SEKUNDER.backgroundColor,
        elevation: 20,
        shadowColor: '#000',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 30
    }
});