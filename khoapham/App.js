import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import Screen3 from "./components/screen3";

import Sample1 from "./components/Sample1";
export default class App extends React.Component {
 constructor(props){
  super(props);
  this.state={
    n:0
  }
 }
 renderScene(route, navigator){
switch(route.name){
  case "Screen1": {
    return <Screen1/>;
  }
  case "Screen2": {
    return <Screen2/>;
  }
  case "Screen3": {
    return <Screen3/>;
  }
}
 }

  render() {
    return (
           <Navigator
      initialRoute = {{name: "Screen1"}}
      renderScene = {this.renderScene}
      />
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
