import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AudioPlayer from "../AudioPlayer";

const AudioItem = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Ionicons style={styles.image} name='book-sharp' />
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