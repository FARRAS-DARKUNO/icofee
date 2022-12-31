import React from "react"
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

const Beranda = () => {

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <ScrollView>
                <Header.UserHeaders image={img} name="Abdul Aziz" />
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
    },
})

export default Beranda