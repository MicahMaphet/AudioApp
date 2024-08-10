import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AudioList from "./app/screens/AudioList";
import AudioItem from "./app/screens/AudioItem";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AudioList"
          component={AudioList} />
        <Stack.Screen
          name="AudioItem"
          component={AudioItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;