import React, { useEffect } from "react"
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native"
import Header from "../component/header"
import STYLE_GLOBAL from "../util/style_global"
import BerandaCm from "../component/beranda_page"
import Card from "../component/card"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Beranda = () => {
    const navigate = useNavigation()
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
                <BerandaCm.Grip />
                <Card.WeatherCard />
                <BerandaCm.Information />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor,
        flex: 1,
        marginBottom: 50
    },
})

export default Beranda