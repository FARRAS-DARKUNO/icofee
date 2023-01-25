import { Alert } from 'react-native'
import { AlertProps } from '../../util/interface';

export const ActionAlert = ({ action, title, massage }: AlertProps) => {
    Alert.alert(
        title,
        massage,
        [
            //@ts-ignore
            { text: "Selanjutnya", onPress: () => action() }
        ]
    );
}

export default ActionAlert