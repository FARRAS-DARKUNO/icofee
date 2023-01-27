import React, { useEffect, useState } from "react"
import {
    StyleSheet,
    SafeAreaView
} from "react-native"
import Header from "../component/header"
import STYLE_GLOBAL from "../util/style_global"
import ProfilCm from "../component/profil/profil"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Loading from "../component/loading"
import axios from "axios"
import { mainLink, profil } from "../util/axios"

const Profil = () => {


    const [isLaoding, setLoading] = useState<boolean>(true)
    const [image, setImage] = useState<string>('')
    const [nicname, setNicname] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [status, setStatus] = useState<number>(0)

    useEffect(() => {
        AsyncStorage.getItem("Token")
            .then(token => {
                AsyncStorage.getItem("Id")
                    .then(id => {
                        //@ts-ignore
                        axios.get(mainLink + profil(id),
                            {
                                headers: { "Authorization": `Token ${token}` }
                            })
                            .then(plecement => {
                                setNicname(plecement.data.username)
                                setName(plecement.data.name)
                                setStatus(parseInt(plecement.data.verification_status))
                                setImage(plecement.data.profile_pic)
                                setLoading(false)
                            })
                    })
            })
    }, [isLaoding, status])


    return (
        <>
            {
                isLaoding ? <Loading /> :
                    <SafeAreaView style={[styles.container, STYLE_GLOBAL.BACKGROUND_WHITE]}>
                        <Header.HeaderTittle name="Profil Pengguna" />
                        <ProfilCm.ProfilUser name={name} image={image} nicname={nicname} status={status} />
                        <ProfilCm.ProfileMenus />
                    </SafeAreaView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Profil