import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    console.log(props)
    return (
<View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#30d0fe',
      height: 116,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 22,
      paddingTop: 71,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
    },
    textStyle: {
      color: '#fff',
      fontSize: 28,
      fontFamily: 'AvenirNext-DemiBold',
    },
  });
  




export default Header;