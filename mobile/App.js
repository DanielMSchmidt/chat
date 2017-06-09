import React from 'react';
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: ''};
    }
  render() {
        if(this.state.username === ''){
            return (
                <LoginScreen onPress={(text)=> this.setState({username: text})}/>
            );
        }
        return (
            <ChatScreen onPress={(text) => console.log(text)}/>
        )
  }
}