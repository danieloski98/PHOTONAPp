/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullnameState: false,
      emailState: false,
      passwordState: false,
      fullname: '',
      email: '',
      password: '',
      submitting: false,
    };
  }

  setFieldState = (fieldname, value) => {
    this.setState({
      [fieldname]: value,
    });
  };

  setValue = (fieldname, value) => {
    this.setState({
      [fieldname]: value,
    });
  };

  submit = () => {
    this.setState({
      submitting: true,
    });

    let timeout = setTimeout(() => {
      this.setState({
        submitting: false,
      });
      this.props.navigation.navigate('Dashboard');
      clearTimeout(timeout);
    }, 3000);
  };

  render() {
    return (
      <View style={this.style.Parent}>
        <Text style={this.style.headerText}>Create An Account</Text>
        <Text style={this.style.normalText}>
          Let's help you create your account
        </Text>
        <View style={this.style.inputBox}>
          <Text>Full name</Text>
          <TextInput
            onFocus={() => this.setFieldState('fullnameState', true)}
            onBlur={() => this.setFieldState('fullnameState', false)}
            onChangeText={(name) => this.setValue('fullname', name)}
            value={this.state.fullname}
            placeholder="Full name"
            style={
              this.state.fullnameState ? this.style.active : this.style.inActive
            }
          />
        </View>
        <View style={this.style.inputBox}>
          <Text>Email</Text>
          <TextInput
            onFocus={() => this.setFieldState('emailState', true)}
            onBlur={() => this.setFieldState('emailState', false)}
            onChangeText={(email) => this.setValue('email', email)}
            value={this.state.email}
            placeholder="Email"
            style={
              this.state.emailState ? this.style.active : this.style.inActive
            }
          />
        </View>
        <View style={this.style.inputBox}>
          <Text>Password</Text>
          <TextInput
            onFocus={() => this.setFieldState('passwordState', true)}
            onBlur={() => this.setFieldState('passwordState', false)}
            onChangeText={(password) => this.setValue('password', password)}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password"
            style={
              this.state.passwordState ? this.style.active : this.style.inActive
            }
          />
        </View>
        <View
          style={{
            ...this.style.buttonContainer,
            width: '100%',
          }}>
          <TouchableHighlight
            onPress={() => this.submit()}
            style={this.style.button}>
            {this.state.submitting ? (
              <ActivityIndicator color="white" size={32} />
            ) : (
              <Text style={this.style.buttonText}>Submit</Text>
            )}
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  style = StyleSheet.create({
    Parent: {
      flex: 1,
      backgroundColor: 'white',
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 30,
    },
    headerText: {
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
    },
    normalText: {
      fontSize: 14,
      color: 'grey',
    },
    inputBox: {
      marginTop: 30,
    },
    inActive: {
      width: '100%',
      borderRadius: 5,
      backgroundColor: 'whitesmoke',
      marginTop: 10,
      paddingLeft: 10,
    },
    active: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#00a8ff',
      borderRadius: 5,
      marginTop: 10,
      paddingLeft: 10,
    },
    buttonContainer: {
      width: '100%',
      height: '8%',
      marginTop: 30,
    },
    button: {
      height: '100%',
      backgroundColor: '#00a8ff',
      borderRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
    },
  });
}
