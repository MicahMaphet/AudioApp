import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

type TailProps = {
  title: string,
}

const Tail = (props: TailProps) => {
  return (
     <View style={{borderWidth: 3}}>
      <Text style={{fontSize: 30}}>{props.title}</Text>
      <Image source={require('../assets/images/book.png')} />
    </View>
  );
}

export default function Index() {
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
        <Tail title="Bunny Story"></Tail>
      </ScrollView>
    </View>
  );
}
