import React from 'react';
import {FlatList, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class ChatScreen extends React.Component {

    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.props.onPress(this.state.text);
        this.messageInput.clear()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>You chat as {this.props.username}</Text>
                <FlatList
                    style={styles.messages}
                    data={this.props.messages}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <View style={styles.input}>
                    <TextInput
                        ref={(instance) => { this.messageInput = instance; }}
                        style={{flex: 3}}
                        placeholder="Message"
                        onChangeText={(text) => this.setState({text})}
                        onSubmitEditing={this.onPress}
                    />
                    <Button
                        style={{flex: 1}}
                        title="Send"
                        onPress={this.onPress} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 5
    },
    message: {
        flex: 3,
    },
    input: {
      flexDirection: 'row',
        height: 40
    }
});
