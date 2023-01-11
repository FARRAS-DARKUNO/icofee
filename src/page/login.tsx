import React, { useState } from "react"
import {
    Text,
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from "react-native"
import Header from "../component/header"
import { useNavigation } from "@react-navigation/native"
import STYLE_GLOBAL from "../util/style_global"
import BoxInput from "../component/box_input"
import Button from "../component/button"

const Login = () => {
    const navigate = useNavigation()

    const gotoBack = () => navigate.goBack()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <SafeAreaView style={styles.container}>
            <Header.BackHeader name="Masuk" action={gotoBack} />
            <View style={STYLE_GLOBAL.ENTER40} />
            <ScrollView >
                <BoxInput.TextInputs tittle="Username" input={setUsername} values={username} />
                <BoxInput.TextInputs tittle="Kata Sandi" input={setPassword} values={password} />
                <View style={STYLE_GLOBAL.ENTER40} />
                <Button.NormalButton response={() => console.log('hallo')} tiitle="Masuk" />
                <View style={STYLE_GLOBAL.ENTER20} />
                <View style={styles.center}>
                    <Text style={[STYLE_GLOBAL.BLACK_COLOR, STYLE_GLOBAL.PAGE]}>
                        Lupa kata sandi ?
                        <Text
                            style={[STYLE_GLOBAL.TERSIER_COLOR, STYLE_GLOBAL.PAGE]}
                            onPress={() => console.log('hallo')}
                        >
                            {" Klik Sini"}
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login