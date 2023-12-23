import React from 'react';
import { View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Button
                    title="Go to Audio Screen"
                    onPress={() => navigation.navigate('AudioScreen')}
                />
            </View>
        );
    }
}

export default HomeScreen;

// const HomeScreen = ({ navigation }) => {
//     return (
//         <View>
//             <Button
//                 title="Go to Audio Screen"
//                 onPress={() => navigation.navigate('AudioScreen')}
//             />
//         </View>
//     );
// };
