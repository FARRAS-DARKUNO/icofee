import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from "react-native"
import { CardProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"
import { useNavigation } from "@react-navigation/native"
import NamePage from "../../util/namePage"

const NotificationCard = ({ tittle, time, response }: CardProps) => {

    const navigate = useNavigation()
    //@ts-ignore
    const gotoInformation = () => navigate.navigate(NamePage.NotificationDetail)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={gotoInformation}>
                <Image source={require("../../assets/warning.png")} style={{ height: 50, width: 50 }} />
                <View style={styles.textBox}>
                    <Text
                        style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE, styles.bodyText]}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    >
                        {tittle}
                    </Text>
                    <Text style={[STYLE_GLOBAL.PRIMARI_COLOR, STYLE_GLOBAL.PAGE, styles.bodyText]}>
                        {time}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingHorizontal: 20,
        marginBottom: 10,

    },
    card: {
        width: '100%',
        height: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: STYLE_GLOBAL.BACKGROUND_SEKUNDER.backgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 20
    },
    textBox: {
        width: "75%"

    },
    bodyText: {
        textAlign: 'justify',
        marginBottom: 5
    }
});

export default NotificationCard