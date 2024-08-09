
import { View, Text, Image, StyleSheet, } from 'react-native';

type TailProps = {
  title: string,
  description?: string,
  imageUri?: string,
}

export default function Tail(props: TailProps) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/book.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description ? props.description : 'No Description'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    height: 100
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 30, // Optional, for circular images
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
