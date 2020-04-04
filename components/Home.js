import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        require('../assets/images/1.jpg'),
        require('../assets/images/2.jpg'),
        require('../assets/images/3.jpg'),
        require('../assets/images/4.jpg'),
        require('../assets/images/5.jpg'),
        require('../assets/images/6.jpg'),
      ],
    };
  }

  render() {
    return (
      <View style={style.Parent}>
        <View style={style.tabBar}>
          <Icon name="menu" size={25} color="white" />
          <Text style={style.header}>PHOTON</Text>
          <Icon name="search" size={25} color="white" />
        </View>
        <View style={style.storiesContainer}>
          <ScrollView
            style={style.scrollview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: '#273c75',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.4,
              }}>
              <Icon name="plus" size={24} color="#273c75" />
            </View>
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/avatar.png')}
              resizeMode="contain"
              style={{width: 50, height: 50, borderRadius: 30, marginLeft: 20}}
            />
          </ScrollView>
        </View>
        <FlatList
          style={{flex: 1, backgroundColor: 'lightgrey', paddingLeft: 10, paddingTop: 11,paddingBottom: 10}}
          data={this.state.data}
          numColumns={2}
          keyExtractor={(item) => item}
          renderItem={({item, index}) => (
            <Image
              // Key={index}
              style={style.image}
              source={item}
              resizeMode="cover"
            />
          )}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  Parent: {
    flex: 1,
  },
  tabBar: {
    width: '100%',
    height: '12%',
    backgroundColor: '#0097e6',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  storiesContainer: {
    width: '100%',
    height: '15%',
  },
  scrollview: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 40,
  },
  container: {
    flex: 1,
  },
  image: {
    width: 160,
    height: 300,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
