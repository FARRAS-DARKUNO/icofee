import React from "react"
import {
    StyleSheet
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../component/header"
import STYLE_GLOBAL from "../util/style_global"
import ProfilCm from "../component/profil/profil"

const Profil = () => {

    let img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

    return (
        <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
            <Header.HeaderTittle name="Profil Pengguna" />
            <ProfilCm.ProfilUser name="Naza Sapta Al Kausir" image={img} nicname="nazwa119002" status={0} />
            <ProfilCm.ProfileMenus />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Profil