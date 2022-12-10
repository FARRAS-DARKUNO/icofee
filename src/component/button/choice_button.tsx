import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native"
import { ButtonProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"

const ChoiceButton = ({ response }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, STYLE_GLOBAL.BACKGROUND_PREMIER]} onPress={response}>
            <Text style={[STYLE_GLOBAL.BUTTON, STYLE_GLOBAL.WHITE_COLOR]}>
                Pilih ...
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ChoiceButton