import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native"
import { ButtonProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"

const RegisterButton = ({ response, tiitle }: ButtonProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={response}>
                <Text style={[STYLE_GLOBAL.BUTTON, STYLE_GLOBAL.BLACK_COLOR]}>
                    {tiitle}
                </Text>
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
        paddingHorizontal: 75
    },
    button: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#000',
    }
});

export default RegisterButton