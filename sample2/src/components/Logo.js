import React, {Component} from 'react';
import { StyleSheet,
   Text,
    View,
    StatusBar,
    TextInput,
    Image
  } from 'react-native';

  export default class Logo extends Component{
      render(){
          return(
              <View style = {styles.container}>
              <Image style = {{width: 350, height: 360 }}
                source={require('../image/logo1.png')}
                />
                <Text style ={styles.Logotext}> EDUCATION APP</Text>

              </View>

          )
      }
  }
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      
      alignItems: 'center',
      justifyContent: 'center', 
    },
     Logotext:{
         marginVertical: 30,
         fontSize: 20,
         color: 'rgba(255, 255, 255, 0.7)'
     }
  });