import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AudioPlayer from "../AudioPlayer";
import { useRoute, RouteProp } from "@react-navigation/native";
import { TailProps } from "../Tail";
import { useEffect, useState } from "react";
import config from "../util/config";

const AudioItem = () => {
    const route = useRoute<RouteProp<Record<string, TailProps>, string>>();
    const [isLoading, setLoading] = useState<any>(true);
    const [storyText, setStoryText] = useState<string>();
    
    const { title, image, audio, story } = route.params;


    const getStoryText = async () => {
        try {
            const response = await fetch(config.uri + '/stories/' + story);
            const text = await response.text()
            setStoryText(text);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getStoryText();
    }, []);

    return (
        <View style={{alignItems: 'center'}}>
            {image ? <Image source={{uri: config.uri + '/images/' + image}} style={styles.image} />
                   : <Ionicons style={styles.image} name='book-sharp' />}
            <Text style={styles.title}>{title}</Text>
            {audio ? <AudioPlayer audio={audio}></AudioPlayer>
                   : <Text>{title} has no audio http://192.168.1.129:3000/images/{image}</Text>}
            <Text>{story}</Text>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (    
                <Text style={styles.story}>{storyText}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        fontSize: 200,
        width: 200,
        height: 200,
      },
    title: {
        fontSize: 30
    },
    story: {
        fontSize: 15
    }
});
  
export default AudioItem;