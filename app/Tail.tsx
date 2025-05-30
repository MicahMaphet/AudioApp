import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import config from './util/config';

export default function Tail(props: TailProps) {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => openTail(navigation, props)}>
      {props.image 
      ? <Image source={{ uri: config.uri + '/images/' + props.image }} style={styles.image} />
      : <Ionicons name='book-outline' style={styles.image}/>}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
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
    alignItems: 'center',
    height: 250,
    width: 200,
    margin: 5
  },
  image: {
    fontSize: 200,
    width: 200,
    height: 200,
    borderRadius: 10
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
