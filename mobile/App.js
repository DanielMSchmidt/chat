import React from 'react';
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen";
import { Alert } from "react-native";

export default class App extends React.Component {

    static defaultProps = {
      websocket_addr: 'ws://localhost:8080/ws',
    };

    constructor(props){
        super(props);
        this.state = {
            username: '',
            conn: null,
            messages: [],
        };
        this.onLogin = this.onLogin.bind(this);
        this.onSubmitMessage = this.onSubmitMessage.bind(this);
    }

    onLogin(username){
        let conn = new WebSocket(this.props.websocket_addr);
        conn.onopen = () => {
            this.setState({
                username: username,
                conn: conn
            })
        };

        conn.onerror = () => {
            Alert.alert('Connection Error', 'It was not possible to connect to ' + this.props.websocket_addr)
        };

        conn.onmessage = (message) => {
          this.setState({
              messages: this.state.messages.concat({key: message.data})
          });
        }
    }

    onSubmitMessage(message){
        this.state.conn.send(message);
    }

    render() {
        if(this.state.username === ''){
            return (
                <LoginScreen onPress={this.onLogin}/>
            );
        }
        return (
            <ChatScreen
                username={this.state.username}
                messages={this.state.messages}
                onPress={this.onSubmitMessage}/>
        )
    }
}