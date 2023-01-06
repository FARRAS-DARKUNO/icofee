import React, { useEffect } from "react"
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from "react-native"
import { CardProps } from "../../util/interface"
import STYLE_GLOBAL from "../../util/style_global"

const PriceCard = ({ image, body, response, isUpgrade, price, tittle, persen }: CardProps) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={response}>
                <View style={styles.imageBox}>
                    <Image source={{ uri: image }} style={{ width: "100%", height: '100%', borderRadius: 9 }} />
                </View>
                <View style={styles.textBox}>
                    <View style={styles.headerText}>
                        <Text
                            style={[STYLE_GLOBAL.HEADER3, STYLE_GLOBAL.PRIMARI_COLOR]}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                        >
                            {tittle}
                        </Text>
                        <Text
                            style={[STYLE_GLOBAL.PAGE, STYLE_GLOBAL.PRIMARI_COLOR]}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                        >
                            {body}
                        </Text>
                    </View>
                    <View style={styles.priceText}>
                        <Text style={[STYLE_GLOBAL.HEADER3, isUpgrade == 1 ? STYLE_GLOBAL.GREEN_TER_COLOR : STYLE_GLOBAL.RED_COLOR]}>
                            {`RP ${price}`}
                        </Text>
                        <Text style={[STYLE_GLOBAL.HEADER3, isUpgrade == 1 ? STYLE_GLOBAL.GREEN_TER_COLOR : STYLE_GLOBAL.RED_COLOR]}>
                            {`${isUpgrade == 1 ? "+" : "-"} ${persen}%`}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        paddingHorizontal: 20,
        marginBottom: 15,

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
        padding: 10
    },
    imageBox: {
        width: '35%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        width: '63 %',
        height: "100%",
        justifyContent: 'space-between',
    },
    headerText: {
        width: '100%',
        height: "70%",
    },
    priceText: {
        width: '100%',
        height: "30%",
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});

export default PriceCard