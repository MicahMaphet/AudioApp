import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AudioList from "./app/screens/AudioList";
import AudioItem from "./app/screens/AudioItem";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="AudioList"
          component={AudioList} />
        <Drawer.Screen
          name="AudioItem"
          component={AudioItem} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;