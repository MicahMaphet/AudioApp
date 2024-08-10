import { Image, View } from "react-native";
import AudioPlayer from "../AudioPlayer";

const AudioItem = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/book.png')}></Image>
            <AudioPlayer></AudioPlayer>
        </View>
    );
}

export default AudioItem;