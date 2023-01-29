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
import { useNavigation } from "@react-navigation/native"
import NamePage from "../../util/namePage"

const PriceCard = ({ image, body, isUpgrade, price, tittle, persen, id }: CardProps) => {

    const navigate = useNavigation()
    // @ts-ignore
    const gotoDetail = () => navigate.navigate(NamePage.DetailProduk, { id: id })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, STYLE_GLOBAL.BACKGROUND_WHITE]} onPress={gotoDetail}>
                <View style={styles.imageBox}>
                    <Image source={{ uri: image }} style={{ width: "100%", height: '100%', borderRadius: 9, resizeMode: 'center' }} />
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
                            {`${isUpgrade == 1 ? "+" : ""} ${persen}%`}
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