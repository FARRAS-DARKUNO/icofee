import React, { useEffect, useState } from "react"
import {
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    View
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import Card from "../component/card"
import PengajuanCm from "../component/pengajian"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Pengajuan = () => {
    const navigate = useNavigation()
    const [choice, setChoice] = useState<string>('add')
    useEffect(() => {
        AsyncStorage.getItem('Token').then(token => {
            if (token == null) {
                //@ts-ignore
                navigate.navigate(NamePage.LandingPage)
            }
        })
    })
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <ScrollView>
                <Header.UserHeaders />
                <View style={STYLE_GLOBAL.ENTER30} />
                {
                    choice == "add" ?
                        <View>
                            <Card.ChoiceAdd action={setChoice} />
                            <PengajuanCm.AddSide />
                        </View>
                        :
                        <View>
                            <Card.ChoiceUpgrade action={setChoice} />
                            <PengajuanCm.UpdateSide />
                        </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor,
        flex: 1,
    },
})

export default Pengajuan