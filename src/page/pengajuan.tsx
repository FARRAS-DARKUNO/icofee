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

const Pengajuan = () => {

    const [choice, setChoice] = useState<string>('add')

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