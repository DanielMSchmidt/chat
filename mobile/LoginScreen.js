import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: ''};
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.props.onPress(this.state.text)
    }

    render() {

        return (
            <View style={styles.container}>
                <Text> Start chatting...</Text>
                <TextInput
                    style={{height: 40, width: 200}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={this.onPress}
                />
                <Button title="Start"
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
