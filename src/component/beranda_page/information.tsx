import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../card";

const Information = () => {

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (
        <View style={styles.continer}>
            <View style={[styles.box, styles.margin]}>
                <Text style={[STYLE_GLOBAL.INFORMATION, STYLE_GLOBAL.PRIMARI_COLOR]}>Informasi Terkini</Text>
                <TouchableOpacity style={styles.box}>
                    <Text style={[STYLE_GLOBAL.MINI_BUTTON, STYLE_GLOBAL.PRIMARI_COLOR]}>
                        {"Selebihnya"}
                    </Text>
                    <Icons
                        name="chevron-right"
                        size={14}
                        color={`${STYLE_GLOBAL.SECONDARY_COLOR.color}`}
                    />
                </TouchableOpacity>
            </View>

            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />
            <Card.InformationCard tittle={'halloooo...'} body={text} image={img} time={'Senin, 29 juli 2019'} />

        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        marginTop: 30,

    },
    margin: { marginHorizontal: 20, marginBottom: 20 },
    box: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
    }
})


interface Props {
    data: any
}

export default Information