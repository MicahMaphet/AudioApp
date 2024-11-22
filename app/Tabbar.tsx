import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import AudioList from "./screens/AudioList";
import AudioItem from "./screens/AudioItem";
import Search from "./screens/Search";
import AIPrompt from "./screens/AIPrompt";

const HomeStack = createNativeStackNavigator()

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="AudioList" component={AudioList} />
            <HomeStack.Screen name="AudioItem" component={AudioItem} />
        </HomeStack.Navigator>
    );
}

function SearchNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={Search} />
        </HomeStack.Navigator>
    );
}

function AINavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="AIPrompt" component={AIPrompt} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeNav'
                component={HomeNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Ionicons name='book' />
                }}
            />
            <Tab.Screen
                name='SearchNav'
                component={SearchNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Ionicons name='search' />
                }}
            />
            <Tab.Screen
                name='AINav'
                component={AINavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Ionicons name='chatbox' />
                }}
            />
        </Tab.Navigator>
    );
}