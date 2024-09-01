import { TextInput, View } from "react-native";
import Tail from "../Tail";


export default function Search() {
    return (
        <View>
            <TextInput placeholder="Search for a tail"></TextInput>
            <Tail title="Thunder Wizard" image="Wizard.png" audio="Assets_Sounds_Thunder.mp3"/>
        </View>
    );
}