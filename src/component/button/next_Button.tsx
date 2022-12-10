import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native"
import { ButtonProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const NextButton
    = ({ response, tiitle, iconLeft }: ButtonProps) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, STYLE_GLOBAL.BACKGROUND_PREMIER]} onPress={response}>
                    <Text style={[STYLE_GLOBAL.HEADER3, STYLE_GLOBAL.WHITE_COLOR]}>
                        {tiitle}
                    </Text>
                    <Icons name={`${iconLeft}`} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    button: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'space-between',
        elevation: 20,
        shadowColor: '#000',
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'
    }
});

export default NextButton
