import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import { CardProps } from "../../util/interface"

const DinamicCard = ({ image, tittle, response }: CardProps) => {

    const dummie = () => console.log("masuk")


    return (
        <TouchableOpacity style={[styles.box, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={response}>
            <View style={styles.containBox50}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.containBox50}>
                <Text style={[STYLE_GLOBAL.SECONDARY_COLOR, STYLE_GLOBAL.CARD_GRID]}>
                    {tittle}
                </Text>
            </View>
        </TouchableOpacity>
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
    box: {
        height: 90,
        width: '49%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: STYLE_GLOBAL.BACKGROUND_SEKUNDER.backgroundColor,
        elevation: 10,
        shadowColor: '#000',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 5,
        marginBottom: 10
    },
    image: {
        height: 50,
        width: 50,
    },
    containBox50: {
        height: '100%',
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default DinamicCard