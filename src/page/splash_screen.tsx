import React, { useEffect } from "react"
import {
    Text,
    StyleSheet,
    StatusBar,
    View,
    Image
} from "react-native"
import STYLE_GLOBAL from "../util/style_global"
import AsyncStorage from "@react-native-async-storage/async-storage"
import NamePage from "../util/namePage"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { mainLink, profil } from "../util/axios"

const SplashScreen = () => {

    const navigate = useNavigation()

    const checkToken = () => {
        AsyncStorage.getItem("Token")
            .then(placement => {
                if (placement == null || placement == '') {
                    setTimeout(() => {
                        //@ts-ignore
                        navigate.navigate(NamePage.LandingPage)
                    }, 3000)
                }
                else {
                    AsyncStorage.getItem("Id").then(id => {
                        axios.get(mainLink + profil(id!),
                            {
                                headers: { "Authorization": `Token ${placement}` }
                            }).then(value => {
                                console.log(value.data)
                                AsyncStorage.setItem("Verification", value.data.verification_status).then(() => {
                                    setTimeout(() => {
                                        //@ts-ignore
                                        navigate.navigate(NamePage.NavigationBar)
                                    }, 1000)
                                })

                            })
                    })

                }
            })
    }

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <View />
            <Image source={require('../assets/logo.png')} style={{ height: 200, width: 200 }} />
            <View style={styles.view}>
                <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.HEADER3]}> Supported by : </Text>
                <View style={STYLE_GLOBAL.ENTER10} />
                <Image source={require('../assets/suportby.png')} style={{ height: 39, width: 150 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 35
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SplashScreen