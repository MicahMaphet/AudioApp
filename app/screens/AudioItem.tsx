import { View, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import AudioPlayer from "../AudioPlayer";

const AudioItem = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Feather style={styles.image} name='book-open'></Feather>
            <AudioPlayer></AudioPlayer>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      fontSize:150,
      marginRight: 10,
    },
});

export default AudioItem;