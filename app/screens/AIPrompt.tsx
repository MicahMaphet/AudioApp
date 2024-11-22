import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import config from "../util/config";

export default function AIPrompt() {
    const [prompt, setPrompt] = useState('');
    const [story, setStory] = useState('Enter and send a prompt');
    const [isLoading, setLoading] = useState(true);

    const handleSendMessage = async() => {
        try {
            setStory(`Fetching ${config.uri}/api?prompt=${prompt}`);
            const response = await fetch(`${config.uri}/api?prompt=${prompt}`);
            setStory(await response.text());
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Text>{story}</Text>

            <TextInput
                placeholder='Beggining of the story...'
                onChangeText={(str) => setPrompt(str)}
            />
            <Pressable
                onPress={() => {
                    handleSendMessage()
                }}
            >
                <Ionicons name='send' size={24} color='black' />
            </Pressable>
        </View>
    );
}
