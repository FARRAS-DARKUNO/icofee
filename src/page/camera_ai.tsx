import React, { useEffect, useRef, useState } from "react"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Image,
    TouchableOpacity,

} from "react-native"
import STYLE_GLOBAL from "../util/style_global";
import Header from "../component/header";
import { Camera, CameraDevices, useCameraDevices } from "react-native-vision-camera";
import { useNavigation } from "@react-navigation/native";
import NamePage from "../util/namePage";
// import { RNCamera } from 'react-native-camera';

const CameraAi = () => {

    const devices = useCameraDevices()
    const device = devices.back

    const navigate = useNavigation()

    const [picker, setPicker] = useState<any>(null)
    const camera = useRef<Camera>(null)

    const option: any = {
        title: 'Pilih Gambar',
        type: 'library',
        option: {
            selectionLimit: 1,
            mediaType: 'photo',
        }
    }

    const setUp = async () => {
        await Camera.getCameraPermissionStatus()
        await Camera.requestCameraPermission()
    }

    const openGalery = async () => {
        const imagesFromGalery: any = await launchImageLibrary(option);
        if (imagesFromGalery.didCancel) {
            console.log('cancel Image')
        } else if (imagesFromGalery.errorCode) {
            console.log(imagesFromGalery.errorMessage)
        } else {
            const source = {
                uri: imagesFromGalery.assets[0].uri,
                type: imagesFromGalery.assets[0].type,
                name: imagesFromGalery.assets[0].fileName,
            }
            //@ts-ignore
            setPicker(source)
            // console.log(source)
            //@ts-ignore
            navigate.navigate(NamePage.DetailML, { image: source })
            // console.log(source.uri)
        }

    }

    const takePhotos = async () => {
        await camera.current!.takePhoto({
            flash: 'auto'
        }).then(photo => {
            console.log(photo.path)
            const source = {
                uri: `file://${photo.path}`,
                type: "image/jpeg",
                name: `${Math.floor(Math.random() * 999999)}.jpg`,
            }
            // console.log(source)
            //@ts-ignore
            navigate.navigate(NamePage.DetailML, { image: source })
        })


    }

    useEffect(() => {
        setUp()
    }, [])

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor}
            />
            <Header.HeaderTittle name="CoffeeTera Camera" />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.cameraContainer}>
                    {
                        device != null ?
                            <Camera
                                style={StyleSheet.absoluteFill}
                                device={device}
                                photo={true}
                                isActive={true}
                                ref={camera}
                            /> : <View />
                    }
                </View>
                <View style={styles.borderButton}>
                    <TouchableOpacity onPress={openGalery}>
                        <Image source={require('../assets/imagepic.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePhotos}>
                        <Image source={require('../assets/press.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>
                    <View style={{ height: 60, width: 60 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: STYLE_GLOBAL.BACKGROUND_WHITE.backgroundColor,
        flex: 1,
        marginBottom: 50
    },
    cameraContainer: {
        marginTop: 20,
        height: 500,
        width: '90%',
        backgroundColor: 'red',
        borderRadius: 30,
    },
    borderButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    }
})

export default CameraAi