import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AudioList from "./app/screens/AudioList";
import AudioItem from "./app/screens/AudioItem";

const Drawer = createDrawerNavigator();

const App = () => {
  const isLargeScreen = useWindowDimensions().width >= 768;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Audio List"
        screenOptions={{
          drawerType: isLargeScreen ? 'permanent' : 'slide'
        }}
      >
        <Drawer.Screen name="Audio List" component={AudioList} />
        <Drawer.Screen name="Audio Item" component={AudioItem} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;