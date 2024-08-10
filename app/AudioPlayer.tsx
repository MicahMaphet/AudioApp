import React, { useState, useEffect, Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Feather from 'react-native-vector-icons/Feather'

const AudioPlayer: React.FC = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('../assets/audio/Subway-Surfers-Theme-Sound-Effect.mp3')
      );
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
      <TouchableOpacity onPress={pauseSound}>
        <Feather name="pause" style={styles.button}/>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={playSound}>
      <Feather name="play" style={styles.button}/>
    </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
  },
});

export default AudioPlayer;