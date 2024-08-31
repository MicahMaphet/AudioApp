import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AudioPlayer from "../AudioPlayer";
import { useRoute, RouteProp } from "@react-navigation/native";

const AudioItem = () => {
    const route = useRoute<RouteProp<Record<string, { audio: string }>, string>>();
    const { audio } = route.params;
    return (
        <View style={{alignItems: 'center'}}>
            <Ionicons style={styles.image} name='book-sharp' />
            <AudioPlayer audio={audio}></AudioPlayer>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      fontSize: 150,
      marginRight: 10,
    },
});

export default AudioItem;