import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';


export default class AndroidApp extends React.Component {

    static render() {
        return (
            <App websocket_addr="ws://10.0.2.2:8080/ws"/>
        )
    }
}

AppRegistry.registerComponent('chat', () => AndroidApp);
