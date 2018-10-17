import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class HomeScreen extends Component {
  state = {
    location: { coords: {latitude: 0, longitude: 0}},
  };

  componentWillMount() {
    let status = Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }
  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    this.setState({location, region})
  }

  render() {
    return (<View>
        <Expo.MapView
          style={{ height: "100%" }}
          showsUserLocation={true}
          region={this.state.region}
        />
        <Text>Test</Text>
    </View>);
  }
}

Expo.registerRootComponent(HomeScreen);
