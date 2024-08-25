import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AudioList from "./screens/AudioList";
import AudioItem from "./screens/AudioItem";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Audio List"
                component={AudioList}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Ionicons name='albums' />
                }}
            />
            <Tab.Screen
                name="Audio Item"
                component={AudioItem}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Ionicons name='book' />
                }}
            />
        </Tab.Navigator>
    );
}