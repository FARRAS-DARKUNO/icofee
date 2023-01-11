import React from "react"
import {
    StyleSheet,
    View,
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import Button from "../button"
import { useNavigation } from "@react-navigation/native"
import NamePage from "../../util/namePage"

const ProfileMenus = () => {

    const navigate = useNavigation()

    const Dummie = () => console.log('masuk')
    //@ts-ignore
    const gotoProfilEdit = () => navigate.navigate(NamePage.EditProfil)
    //@ts-ignore
    const gotoUsahaEdit = () => navigate.navigate(NamePage.EditDataUsaha)

    return (
        <View style={styles.container}>
            <Button.ProfilButton response={gotoProfilEdit} tiitle={"Edit Profile"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
            <Button.ProfilButton response={gotoUsahaEdit} tiitle={"Edit Data Usaha"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
            <Button.ProfilButton response={Dummie} tiitle={"Pengaturan"} iconLeft={"wrench-outline"} iconRight={"chevron-right"} />
            <Button.ProfilButton response={Dummie} tiitle={"Keluar"} iconLeft={"logout"} iconRight={"chevron-right"} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
})

export default ProfileMenus