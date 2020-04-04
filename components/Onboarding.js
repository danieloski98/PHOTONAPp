import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import Slider from './slider';
import Writeup from './writeup';

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      COUNT: 0,
    };
  }

  updateCount = (count) => {
    this.setState({
      COUNT: count,
    });
  };

  render() {
    return (
      <View style={style.Parent}>
        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={style.SliderContainer}>
          <View style={style.headerContainer}>
            <Text style={style.header}>PHOTON</Text>
            <Text style={style.normalText}>MADE FOR PHOTOGRAPHY</Text>
          </View>
          <Slider updateCount={this.updateCount} />
          <Writeup count={this.state.COUNT} />
        </View>
        <View style={style.ButtonContainer}>
          <View style={style.ButtonHolder}>
            <TouchableHighlight
              underlayColor="#0097e6"
              onPress={() => this.props.navigation.navigate('Signup')}
              style={[style.Button, style.getStarted]}>
              <Text style={style.buttonText}>Get Started</Text>
            </TouchableHighlight>
          </View>
          <View style={style.ButtonHolder}>
            <TouchableHighlight style={[style.Button, style.signIn]}>
              <Text style={style.buttonText}>Sign in</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  SliderContainer: {
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
  },
  ButtonContainer: {
    flex: 1,
    backgroundColor: '#0984e3',
    flexDirection: 'row',
  },
  ButtonHolder: {
    flex: 1,
  },
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  getStarted: {
    backgroundColor: '#00a8ff',
  },
  signIn: {
    backgroundColor: '#192a56',
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 4,
    width: '100%',
    marginTop: '20%',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  normalText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'whitesmoke',
  },
});
