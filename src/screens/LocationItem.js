import React, {PureCompenent} from 'react';
import {View, Text, StyleSheet } from 'react-native';

class LocationItem extends PureCompenent{
    render(){
        return(
            <View style={styles.root}>
                <Text>
                    {this.props.description}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        JustifyContent: 'center'
    }
});

export default LocationItem;