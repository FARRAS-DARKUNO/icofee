import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../card";
import { useNavigation } from "@react-navigation/native";
import NamePage from "../../util/namePage";
import ApiAxios from "../../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../loading";
import convertDete from "../../util/convert_dete";
import RemoveTagHTML from "../../util/remove_tag_html";

const Information = () => {

    const navigate = useNavigation()

    const [isLoading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>(null)

    //@ts-ignore
    const gotoPageInformasiBudaya = () => navigate.navigate(NamePage.InformasiBudiDaya)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                ApiAxios.getListArticle({ setLoading: setLoading, setData: setData, token: token! })
            })
    }, [isLoading])

    return (
        <View style={styles.continer}>
            <View style={[styles.box, styles.margin]}>
                <Text style={[STYLE_GLOBAL.INFORMATION, STYLE_GLOBAL.PRIMARI_COLOR]}>Informasi Terkini</Text>
                <TouchableOpacity style={styles.box} onPress={gotoPageInformasiBudaya}>
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
            {
                isLoading ? <Loading />
                    : <View>
                        {
                            data.map((placement: any) => (
                                <Card.InformationCard
                                    tittle={placement.title}
                                    body={RemoveTagHTML(placement.body)}
                                    image={placement.thumbnail}
                                    time={convertDete(placement.created_at)}
                                    id={placement.id}
                                    key={placement.id}
                                />
                            ))
                        }
                    </View>
            }
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