import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import { Button } from '../components';

export default function AvailableInFullVersionScreen(props) {
  const rnsUrl = 'https://reactnativestarter.com';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log("Don't know how to open URI: " + rnsUrl);
      }
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Background2.png')}
      style={styles.container}
    >
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.centerLogo}
      />
<Image
        source={require('../../assets/images/slogan.png')}
        style={styles.centerSlogan}
      />
      
      <View style={styles.buttonsContainer}>
        <Button
          large
          secondary
          rounded
          style={styles.button}
          caption="Purchase Now"
          onPress={() => handleClick()}
        />

        <Button
          large
          bordered
          rounded
          style={styles.button}
          caption="Later"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  centerLogo: {
    width: 350,
    height: 350,
  },
  centerSlogan: {
    width: 300,
    height: 150,
  },
  availableText: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
    fontSize: 30,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  }
});
