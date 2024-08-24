import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AudioList from "./screens/AudioList";
import AudioItem from "./screens/AudioItem";


const Tab = createBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Audio List"
                component={AudioList}
            />
            <Tab.Screen
                name="Audio Item"
                component={AudioItem}
            />
        </Tab.Navigator>
    );
}