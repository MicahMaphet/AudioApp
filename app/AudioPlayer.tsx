import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

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

  const togglePlayback = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound();
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload the sound when the component unmounts
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={togglePlayback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AudioPlayer;