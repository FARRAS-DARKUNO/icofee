import {
    View,
    StyleSheet
} from "react-native"
import DinamicCard from "../card/dynamic_card"
import NamePage from "../../util/namePage"
import { useNavigation } from "@react-navigation/native"

const Grip = () => {

    const navigate = useNavigation()

    const Dummie = [
        {
            image: 'https://res.cloudinary.com/diyu8lkwy/image/upload/v1672509634/icon/Group_203_uitzit.png',
            tittle: "CoffeTera Camera",
            respons: () => console.log('Mantapas')
        },
        {
            image: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1672509630/icon/Group_204_nobblh.png",
            tittle: "Informasi Harga",
            //@ts-ignore
            respons: () => navigate.navigate(NamePage.InformasiHargaKopi)
        },
        {
            image: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1672509632/icon/Group_205_tihhke.png",
            tittle: "Informasi Budidaya",
            //@ts-ignore
            respons: () => navigate.navigate(NamePage.InformasiBudiDaya)
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            tittle: "Kopi Pak Hayam Khuruk",
            respons: () => console.log('Mantapas')
        },
    ]

    return (
        <View style={styles.wrap}>
            {
                Dummie.map((value: { image: string, tittle: string, respons(): any }) => (
                    <DinamicCard image={value.image} tittle={value.tittle} key={value.tittle} response={value.respons} />
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
})


export default Grip