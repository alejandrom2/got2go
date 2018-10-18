import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView , Text} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://www.csun.edu/sites/default/files/jacaranda-bathroom1.jpg',
  'https://www.csun.edu/sites/default/files/jacaranda-bathroom3.jpg',
  'https://www.csun.edu/sites/default/files/jacaranda-bathroom2.jpg',
]

export default class App extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <View
        style={styles.container}
        flex={1}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >

          {imageArray}
 <View
          style={styles.skip}
        >

        </View>
        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}

        </View>

        <View >
   <Image
          style={{width: 100, height: 20, marginTop:20}}
          source={{uri: 'https://vignette.wikia.nocookie.net/dancingline/images/c/c6/4.5_stars.png/revision/latest?cb=20171016004524'}}
        />
        <Text style={[styles.textBox, styles.big]}>Jacaranda Bathroom </Text>
        <Text style={[styles.textBox, styles.medium]}>Services</Text>
        <Text style={[styles.textBox, styles.small]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor tellus, sagittis sit amet feugiat non, iaculis in risus. Quisque vel nunc leo. </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:200,
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 235,
    flexDirection: 'row',
  },
    skip: {
    position: 'absolute',
    zIndex: 2,
    bottom: 80,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  textBox: {
    marginTop:20,
  },
    big: {
    fontSize:30,
  },
      medium: {
    fontSize:25,
  },
      small: {
    fontSize:15,
  },
})
