
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from './screens/AudioList';

export default function Tail(props: TailProps) {
  const navigation = useNavigation();

  const imageSource = props.image ? images[props.image] : null;
  return (
    <Pressable style={styles.container} onPress={() => openTail(navigation)}>
      {props.image 
      ? <Image source={imageSource} style={styles.image} />
      : <Feather name='book-open' style={styles.image}/>}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description ? props.description : 'No Description'}</Text>
      </View>
    </Pressable>
  );
};

const images = {
  'book.png': require('../assets/images/book.png'),
  'icon.png': require('../assets/images/icon.png'),
};

type TailProps = {
  title: string,
  description?: string,
  image?: 'book.png' | 'icon.png',
}

function openTail(navigation: any) {
  if (navigation) {
    navigation.navigate('AudioItem');
  }
  console.log('navigation was not defined in tail');
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
    height: 150,
    width: 300,
  },
  image: {
    fontSize:80,
    width: 100,
    height: 100,
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
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
