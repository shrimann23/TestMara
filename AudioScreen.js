import React from 'react';
import { View, Text, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

class AudioScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text>Welcome to the audio page!</Text>
            </View>
        );
    }
}

export default AudioScreen;
