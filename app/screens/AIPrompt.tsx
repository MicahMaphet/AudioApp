import { View } from "react-native"
import { TextInput } from "react-native-gesture-handler";


export default function AIPrompt() {
    return (
        <View style={{alignItems: 'center'}}>
            <TextInput
                placeholder='Beggining of the story...'
            />
        </View>
    );
}
