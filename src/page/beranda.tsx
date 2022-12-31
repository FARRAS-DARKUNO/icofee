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

    const Dummie = [
        {
            image: img,
            tittle: "Kopi Kita"
        },
        {
            image: img,
            tittle: "Kopi Pak aji"
        },
        {
            image: img,
            tittle: "Kopi Pak Sutan 2"
        },
        {
            image: img,
            tittle: "Kopi Pak Hayam Khuruk"
        },
    ]

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <ScrollView>
                <Header.UserHeaders image={img} name="Abdul Aziz" />
                <BerandaCm.Grip data={Dummie} />
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