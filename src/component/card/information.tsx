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

const InformationCard = ({ response, tittle, body, image, time }: CardProps) => {

    const navigate = useNavigation()
    // @ts-ignore
    const gotoDetail = () => navigate.navigate(NamePage.DetailArtikel)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={gotoDetail}>
                <View style={styles.img}>
                    <Image source={{ uri: image }} style={{ width: "100%", height: '100%', borderRadius: 9 }} />
                </View>
                <View style={styles.boxText}>
                    <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.MINI_TITTLE, styles.enter5]}>
                        {tittle}
                    </Text>
                    <Text style={[STYLE_GLOBAL.SMALL, STYLE_GLOBAL.SECONDARY_COLOR, styles.enter5]}>
                        {time}
                    </Text>
                    <Text
                        style={[STYLE_GLOBAL.MINI_TEXT, STYLE_GLOBAL.BLACK_COLOR, styles.bodyText]}
                        ellipsizeMode="tail"
                        numberOfLines={3}
                    >
                        {body}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    card: {
        width: '100%',
        height: '100%',
        borderColor: STYLE_GLOBAL.BACKGROUND_SEKUNDER.backgroundColor,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row"
    },
    img: {
        width: '35%',
        height: '100%',
        borderRadius: 10,
    },
    boxText: {
        width: '65%',
        height: '100%',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    enter5: {
        marginBottom: 5
    },
    bodyText: {
        textAlign: 'justify',
    }

});

export default InformationCard