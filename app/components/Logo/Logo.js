import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles'

const Logo = () => (
  <View style={styles.image}>
    <Image source={require('./images/CoinSwapLogo.png')}/>
  </View>
);

export default Logo;
