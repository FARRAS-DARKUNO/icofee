import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global";
import { HeaderData } from "../../util/interface";

const UserHeaders = ({ image, name }: HeaderData) => {



    return (
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <Image source={{ uri: image }} style={{ width: "100%", height: '100%', borderRadius: 1000 }} />
            </View>
            <View style={styles.boxTiitle}>
                <Text style={[STYLE_GLOBAL.USER_TITTLE, STYLE_GLOBAL.PRIMARI_COLOR]}>
                    {'Hai, ' + name}
                </Text>
                <Text style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.BLACK_COLOR]}>
                    {'Selamat datang di CoffeeTera !'}
                </Text>
            </View>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxImage: {
        height: '100%',
        width: 70,
    },
    boxTiitle: {
        height: '100%',
        width: "72%",
        justifyContent: 'center'
    }
});

export default UserHeaders