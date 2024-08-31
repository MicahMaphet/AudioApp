import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather'

const AudioPlayer: React.FC<{ audio: string }> = (props) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync({
        uri: 'http://localhost:3000/audios/' + props.audio
      });
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload the sound when the component unmounts
        }
      : undefined;
  }, [sound]);


  if (isPlaying) {
    return (
      <Pressable onPress={pauseSound}>
        <Feather name="pause" style={styles.button}/>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={playSound}>
      <Feather name="play" style={styles.button}/>
    </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
  },
});

export default AudioPlayer;