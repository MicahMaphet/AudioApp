import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import Tail from './app/Tail';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView>
        <Tail title="Story A"></Tail>
        <Tail title="Story B"></Tail>
        <Tail title="Story C"></Tail>
        <Tail title="Banana"></Tail>
        <Tail title="Bunny Story" 
            description="This is a story about a bunny that does things. 
            He is not a very nice bunny and needs to do a thing a thing a thing. 
            "></Tail>
      </ScrollView>
    </View>
  );
}

export default App;