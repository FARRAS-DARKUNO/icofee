import * as React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import STYLE_GLOBAL from '../../util/style_global'
import Beranda from "../../page/beranda"
import Pengajuan from "../../page/pengajuan"
import CameraAi from "../../page/camera_ai"
import Notification from "../../page/notification"
import Profil from "../../page/profil"

const NavigationBar = () => {

    const Tab = createBottomTabNavigator();

    const navigationData = [
        {
            page: Beranda,
            name: "Beranda",
            icon: "home-outline"
        },
        {
            page: Pengajuan,
            name: "Pengajuan",
            icon: "create-outline"
        },
        {
            page: CameraAi,
            name: "CofeeTera Cam",
            icon: 'ios-camera-outline'
        },
        {
            page: Notification,
            name: "Pemberitahuan",
            icon: 'md-notifications-outline'
        },
        {
            page: Profil,
            name: "Profil",
            icon: 'md-person-circle-outline'
        },
    ]



    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: STYLE_GLOBAL.PRIMARI_COLOR.color,
                tabBarInactiveTintColor: STYLE_GLOBAL.BLACK_COLOR.color,
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}>
            {
                navigationData.map((data) => (
                    <Tab.Screen
                        key={data.name}
                        name={data.name}
                        component={data.page}
                        options={{
                            tabBarIcon: ({ color, size, }) => (
                                <View style={[styles.icon]}>
                                    <Icon name={data.icon} color={color} size={25} />
                                    <Text style={[{ color: color }, STYLE_GLOBAL.SMALL]}>
                                        {data.name}
                                    </Text>
                                </View>
                            ),
                        }} />
                ))
            }
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: STYLE_GLOBAL.WHITE_COLOR.color,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: STYLE_GLOBAL.BLACK_COLOR.color,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1,
        elevation: 10,
    },
    icon: {
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default NavigationBar