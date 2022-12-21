import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import STYLE_GLOBAL from "../../util/style_global";
import { HeaderData } from "../../util/interface";

const BackHeader = ({ name, action }: HeaderData) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={action}>
                <Icons
                    name="chevron-left"
                    size={32}
                    color={`${STYLE_GLOBAL.SECONDARY_COLOR.color}`}
                />
            </TouchableOpacity>
            <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.HEADER2]}>
                {name}
            </Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
});

export default BackHeader