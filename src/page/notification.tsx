import React from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import Header from "../component/header"
import Card from "../component/card"

const Notification = () => {
    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.HeaderTittle name="Pemberitahuan" />
            <View style={STYLE_GLOBAL.ENTER20} />
            <View style={styles.scroll}>
                <ScrollView >
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                    <Card.NotificationCard tittle="Akun ansa sudah di ferivikasi dan alhamdullilah berhasil" time="20 Januari 2020" />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        height: "82%"
    }
})

export default Notification