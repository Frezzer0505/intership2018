import React, {Component} from 'react';
import { StyleSheet,
   Text,
    View,
    StatusBar,
    
  } from 'react-native';

import Form from '../components/Form';
import Logo from '../components/Logo';

  export default class Login extends Component{
      render(){
          return(
              
              <View style ={styles.container}>
                  <Logo/>
                  <Form type = "Login" />
                  <View style={styles.Signuptextcont}>
                  <Text style={styles.Signuptext}>Don't have an account yet?</Text>
                  <Text style={styles.SignupButton}>Sign Up</Text>
                  </View>
              </View>
          )
      }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455a64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Signuptextcont:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 16,
        flexDirection:'row'


    },
    Signuptext:{
        color:'rgba(255,255,255,0.7)',
        marginVertical: 16,
    },
    SignupButton:{
        color:'#ffffff',
        fontSize:13,
        fontWeight:'200',
        flexDirection:'row'

    }
  });