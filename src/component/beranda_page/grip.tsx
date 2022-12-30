import {
    View,
    StyleSheet
} from "react-native"
import DinamicCard from "../card/dynamic_card"

const Grip = ({ data }: Props) => {

    return (
        <View style={styles.wrap}>
            {
                data.map((value: { image: string, tittle: string }) => (
                    <DinamicCard image={value.image} tittle={value.tittle} key={value.tittle} />
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

interface Props {
    data: any
}

export default Grip