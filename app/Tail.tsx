
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

type TailProps = {
  title: string,
  description?: string,
  imageUri?: string,
}

function openTail() {
  console.log('TODO: open tail page');
}

export default function Tail(props: TailProps) {  
  return (
    <Pressable style={styles.container} onPress={openTail}>
      <Image source={require('../assets/images/book.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description ? props.description : 'No Description'}</Text>
      </View>
    </Pressable>
  );
};

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
