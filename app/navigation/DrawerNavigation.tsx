import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AudioList from "../screens/AudioList";
import AudioItem from "../screens/AudioItem";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const isLargeScreen = useWindowDimensions().width >= 768;
  return (
      <Drawer.Navigator
        initialRouteName="Audio List"
        screenOptions={{
          drawerType: isLargeScreen ? 'permanent' : 'slide'
        }}
      >
        <Drawer.Screen name="Audio List" component={AudioList} />
        <Drawer.Screen name="Audio Item" component={AudioItem} />
      </Drawer.Navigator>
  );
}