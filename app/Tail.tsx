
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Tail(props: TailProps) {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => openTail(navigation, props)}>
      {props.image 
      ? <Image source={{ uri: 'http://localhost:3000/images/' + props.image }} style={styles.image} />
      : <Ionicons name='book-outline' style={styles.image}/>}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Text>{props.title + ' ' + props.image + ' ' + props.audio + ' ' + props.story}</Text>
    </Pressable>
  );
};

export type TailProps = {
  title: string,
  image?: string,
  audio?: string,
  story?: string
}

function openTail(navigation: any, {title, image, audio, story}: TailProps) {
  if (navigation) {
    navigation.navigate('AudioItem', {
      title: title,
      image: image,
      audio: audio,
      story: story
    });
  }
  console.log('navigation was not defined in tail');
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
    height: 250,
    width: 200,
  },
  image: {
    fontSize:200,
    width: 200,
    height: 200,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5
  },
});
