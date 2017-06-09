# Chat

A simple one room chat app

## Mobile

Contains create-react-native-app frontend

### Installation

Run `npm install` to install the dependencies

### Usage

Start with `npm start` and

- `npm run ios`
- `npm run android` (emulator must run before that)

## Server

A simple go server handling the incoming websocket connections

### Usage


#### Docker

Make sure your docker version is higher than `17.05` as we use multi-staged docker builds.
Run `docker build . -t chat-server` to build the image and `docker run chat-server` to run it.

#### Traditional

Run `glide install` to install the dependencies.
Run `go build .` to build the binary and `./server` to start it

### Contributing
