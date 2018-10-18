import Expo from 'expo';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Platform, Text, View, ScrollView, Animated, Image, Dimensions, Alert, TouchableHighlight } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 60;
const CARD_WIDTH = 100;


export default class HomeScreen extends Component {
  state = {
    markers: [
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241297,
              longitude: -118.529213
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241326,
              longitude: -118.529198
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241695,
              longitude: -118.529216
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241662,
              longitude: -118.529190
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241564,
              longitude: -118.528346
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241582,
              longitude: -118.528322
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241092,
              longitude: -118.528571
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241094,
              longitude: -118.528564
          }
      },

      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241323,
              longitude: -118.529220
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241350,
              longitude: -118.529217
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241258,
              longitude: -118.528136
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241216,
              longitude: -118.528154
          }
      },

      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241205,
              longitude: -118.529227
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241210,
              longitude: -118.529211
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241162,
              longitude: -118.528027
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241176,
              longitude: -118.528020
          }
      },

      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241205,
              longitude: -118.529227
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241210,
              longitude: -118.529211
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241162,
              longitude: -118.528027
          }
      },
      {
          title: "Restroom",
          description: "⭐️⭐️⭐️⭐️",
          coordinate: {
              latitude:34.241198,
              longitude: -118.528100
          }
      }],
    location: { coords: {latitude: 0, longitude: 0}},
  };

  componentWillMount() {
    let status = Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    let status = Permissions.askAsync(Permissions.LOCATION);
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            },
            350
          );
        }
      }, 10);
    });
  }

onMarkerClick(event) {
    Alert.alert(
    'Test Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
};

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
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (<View>
        <Expo.MapView
          ref={map => this.map = map}
          style={{ height: "100%" }}
          showsUserLocation={true}
          region={this.state.region}
        >
        {this.state.markers.map((marker, index) => {
            return (
              <Expo.MapView.Marker
              title={marker.title}
              description={marker.description}
              pinColor="green"
              key={index}
              coordinate={marker.coordinate}
               >
               <Expo.MapView.Callout onPress={() => this.onMarkerClick()}>
                  <TouchableHighlight underlayColor='#dddddd'>
                      <View style={styles.calloutText}>
                          <Text>{marker.title}{"\n"}{marker.description}</Text>
                      </View>
                  </TouchableHighlight>
                </Expo.MapView.Callout>
             </Expo.MapView.Marker>
            );
          })}
        </Expo.MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

Expo.registerRootComponent(HomeScreen);
