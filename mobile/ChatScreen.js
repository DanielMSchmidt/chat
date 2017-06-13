import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class ChatScreen extends React.Component {

    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.props.onPress(this.state.text)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Your chat.</Text>
                <TextInput
                    style={{height: 40, width: 200}}
                    placeholder="Message"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button title="Send"
                        onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
