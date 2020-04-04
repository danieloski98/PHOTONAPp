/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import PropTypes from 'prop-types';

export default class Slider extends Component {
  static propTypes = {
    updateCount: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  scroll = (e) => {
    console.log(e.nativeEvent.position);
  };

  render() {
    return (
      <View style={style.Parent}>
        <ViewPager
          style={{flex: 1, padding: 0}}
          onPageSelected={(e) =>
            this.props.updateCount(e.nativeEvent.position)
          }>
          <ImageBackground
            source={require('../assets/images/3.jpg')}
            resizeMode="cover"
            style={style.Background}>
            <View style={{flex: 1, backgroundColor: 'black', opacity: 0.5}} />
          </ImageBackground>
          <ImageBackground
            source={require('../assets/images/1.jpg')}
            resizeMode="cover"
            style={style.Background}>
            <View style={{flex: 1, backgroundColor: 'black', opacity: 0.7}} />
          </ImageBackground>
          <ImageBackground
            source={require('../assets/images/7.jpg')}
            resizeMode="cover"
            style={style.Background}>
            <View style={{flex: 1, backgroundColor: 'black', opacity: 0.5}} />
          </ImageBackground>
        </ViewPager>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Parent: {
    flex: 1,
  },
  Background: {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
  },
});

// Slider.prototype = {
//   updateCount: PropTypes.func,
// };
