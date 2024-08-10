
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from './screens/AudioList';

export default function Tail(props: TailProps) {
  const navigation = useNavigation();
  console.log('From tail:');  
  return (
    <Pressable style={styles.container} onPress={() => openTail(navigation)}>
      <Image source={require('../assets/images/book.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description ? props.description : 'No Description'}</Text>
      </View>
    </Pressable>
  );
};

type TailProps = {
  title: string,
  description?: string,
  imageUri?: string,
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
    width: 100,
    height: 100,
    borderRadius: 30, // Optional, for circular images
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
