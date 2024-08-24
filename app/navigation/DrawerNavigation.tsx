import { useWindowDimensions, View } from "react-native";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AudioList from "../screens/AudioList";
import AudioItem from "../screens/AudioItem";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label='Audio List'
                    icon={() => <Ionicons name='book' />}
                    onPress={() => props.navigation.navigate('Audio List')}
                />
                <DrawerItem
                    label='Audio Item'
                    icon={() => <Ionicons name='book-outline' />}
                    onPress={() => props.navigation.navigate('Audio Item')}
                />
            </DrawerContentScrollView>
        </View>
    )
}

export default function DrawerNavigator() {
  const isLargeScreen = useWindowDimensions().width >= 768;
  return (
      <Drawer.Navigator
        initialRouteName="Audio List"
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerType: isLargeScreen ? 'permanent' : 'slide'
        }}
      >
        <Drawer.Screen name="Audio List" component={AudioList} />
        <Drawer.Screen name="Audio Item" component={AudioItem} />
      </Drawer.Navigator>
  );
}