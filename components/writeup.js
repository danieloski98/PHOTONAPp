import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class writing extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props);
    this.writing = [
      {
        header: 'Lorem Simpu',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      },
      {
        header: 'Lorem Simpu la',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        header: 'Lorem Simpu gin',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ];
  }

  render() {
    return (
      <View style={style.parent}>
        <Text style={style.header}>
          {this.writing[this.props.count].header}
        </Text>
        <Text style={style.text}>{this.writing[this.props.count].body}</Text>
        <View style={style.indicatorContainer}>
          <View style={style.innerIndicatorContainer}>
            {this.writing.map((text, index) => (
              <Text
                key={index}
                style={
                  index === this.props.count
                    ? style.activeStyle
                    : style.indicator
                }
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    zIndex: 2,
    paddingRight: 20,
    marginTop: '100%',
  },
  text: {
    color: 'whitesmoke',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '100',
  },
  indicatorContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  innerIndicatorContainer: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  activeStyle: {
    width: 10,
    height: 10,
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#00a8ff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'right',
  },
});

