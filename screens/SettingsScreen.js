import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Button } from '../components';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    
    // TODO: Add a button that calls _signOutAsync
    
    return(
    <View>
      <Button
        secondary
        rounded
        style={{ alignSelf: 'stretch', marginBottom: 10, }}
        caption={'Logout'}
        onPress={this._signOutAsync}
      />
    </View>);
  }


  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}
