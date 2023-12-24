import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Slider, Button } from 'react-native';
import Sound from 'react-native-sound';

class SoundComponent extends React.Component {

    render () {
        const [isPlaying, setIsPlaying] = useState(false);
        const [progress, setProgress] = useState(0);

        const sound = new Sound('assets/piano.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.error(error);
            }
        });

        const handlePlayPause = () => {
            if (isPlaying) {
                sound.pause();
            } else {
                sound.play();
            }
            setIsPlaying(!isPlaying);
        };

        const handleProgressChange = (newValue) => {
            setProgress(newValue);
        };

        return (
            <View>
                <Slider
                    value={progress}
                    onValueChange={handleProgressChange}
                    minimumValue={0}
                    maximumValue={1}
                    style={styles.progressBar}
                />
                <Button 
                    title={isPlaying ? 'Pause' : 'Play'}
                    onPress={handlePlayPause}
                    style={styles.playPauseButton}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    width: '80%',
    marginBottom: 10,
  },
  playPauseButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default SoundComponent;

