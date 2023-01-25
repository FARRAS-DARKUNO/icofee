import { Alert } from 'react-native'
import { AlertProps } from '../../util/interface';

const MistakeAlert = ({ title, massage }: AlertProps) => {
    Alert.alert(
        title,
        massage,
        [
            { text: "Tutup", onPress: () => null }
        ]
    );
}

export default MistakeAlert