import React from "react"
import {
    StyleSheet,
    View,
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import Button from "../button"

const ProfileMenus = () => {

    const Dummie = () => console.log('masuk')

    return (
        <View style={styles.container}>
            <Button.ProfilButton response={Dummie} tiitle={"Edit Profile"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
            <Button.ProfilButton response={Dummie} tiitle={"Edit Data Usaha"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
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