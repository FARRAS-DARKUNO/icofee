import Lottie from 'lottie-react-native';
import { View } from 'react-native';

const Loading = () => {
    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
            <Lottie source={require('../../assets/loading.json')} autoPlay loop />
        </View>
    );
}

export default Loading