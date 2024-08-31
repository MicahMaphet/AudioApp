import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AudioPlayer from "../AudioPlayer";
import { useRoute, RouteProp } from "@react-navigation/native";
import { TailProps } from "../Tail";

const AudioItem = () => {
    const route = useRoute<RouteProp<Record<string, TailProps>, string>>();
    const { title, image, audio } = route.params;
    return (
        <View style={{alignItems: 'center'}}>
            {image ? <Image source={{uri: 'http://localhost:3000/images/Wizard.png'}} style={styles.image} />
                   : <Ionicons style={styles.image} name='book-sharp' />}
            <Text>{title}</Text>
            {audio ? <AudioPlayer audio={audio}></AudioPlayer>
                   : <Text>{title} has no audio http://localhost:3000/images/{image}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        fontSize:200,
        width: 200,
        height: 200,
      },
});
  
export default AudioItem;