import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global";
import { HeaderData } from "../../util/interface";

const HeaderTittle = ({ name }: HeaderData) => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/leftDaun.png")} style={{ height: 50, width: 50 }} />
            <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.HEADER2]}>
                {name}
            </Text>
            <Image source={require("../../assets/rightDaun.png")} style={{ height: 50, width: 50 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
});

export default HeaderTittle