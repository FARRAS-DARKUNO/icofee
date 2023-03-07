import React, { useEffect, useState } from "react"
import {
    StyleSheet,
    View,
} from "react-native"
import STYLE_GLOBAL from "../../util/style_global"
import Button from "../button"
import { useNavigation } from "@react-navigation/native"
import NamePage from "../../util/namePage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ProfileMenus = () => {
    const [isVerif, setVerif] = useState(false)

    const navigate = useNavigation()

    const Dummie = () => console.log('masuk')
    //@ts-ignore
    const gotoProfilEdit = () => navigate.navigate(NamePage.EditProfil)
    //@ts-ignore
    const gotoUsahaEdit = () => navigate.navigate(NamePage.EditDataUsaha)

    const gotoLogOut = () => {
        AsyncStorage.removeItem('Token')
        AsyncStorage.removeItem('Id')
        //@ts-ignore
        navigate.navigate(NamePage.LandingPage)
    }

    useEffect(() => {
        AsyncStorage.getItem("Verification").then((verifi) => {
            if (verifi != null && verifi == "1") {
                AsyncStorage.getItem("Role").then((role) => {
                    if (role != null && role == "2") {
                        setVerif(true)
                    }
                })
            }
        })
    }, [isVerif])

    return (
        <View style={styles.container}>
            <Button.ProfilButton response={gotoProfilEdit} tiitle={"Edit Profile"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
            <Button.ProfilButton response={gotoUsahaEdit} tiitle={"Edit Data Usaha"} iconLeft={"pencil-outline"} iconRight={"chevron-right"} />
            {
                isVerif ? <Button.ProfilButton response={Dummie} tiitle={"Pengaturan"} iconLeft={"wrench-outline"} iconRight={"chevron-right"} /> : null
            }
            <Button.ProfilButton response={gotoLogOut} tiitle={"Keluar"} iconLeft={"logout"} iconRight={"chevron-right"} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
})

export default ProfileMenus