import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"

const WeatherCard = () => {
    return (
        <View style={styles.margin}>
            <View style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
                <View style={styles.boxInCard}>
                    <View style={styles.box50}>
                        <Text style={[STYLE_GLOBAL.HEADER1, STYLE_GLOBAL.BLACK_COLOR]}>
                            Coming Soon
                        </Text>
                    </View>
                    <View style={styles.box50}>
                        <Image source={{
                            uri: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/pngwing_2_odiwie.png",
                        }} style={styles.img} />
                        <Text style={[STYLE_GLOBAL.HEADER1, STYLE_GLOBAL.BLACK_COLOR]}> 24 C</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    margin: {
        width: '100%',
        height: 100,
        // backgroundColor: 'red',
        paddingHorizontal: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000',
        alignItems: 'center',
        padding: 5,

    },
    box50: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',

    },
    img: {
        height: 50,
        width: 50,
        marginRight: 5,
    },
    boxInCard: {
        width: '100%',
        height: '100%',
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default WeatherCard