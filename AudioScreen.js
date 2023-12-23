import React from 'react';
import { View, Text, Button } from 'react-native';

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
