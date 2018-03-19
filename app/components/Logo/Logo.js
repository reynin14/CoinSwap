import React from 'react';
import { View, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles'

const ANIMATION_DURATION = 250;

class Logo extends React.Component{
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }
  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android'){
      let showListener = 'keyboardDidShow';
      let hideListener = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
  }

  componentWillUnmount () {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  render(){

    const imageStyle = [
      styles.image,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    return(
      <View style={styles.container}>
        <Animated.Image style={imageStyle} resizeMode="contain" source={require('./images/CoinSwapLogo2.png')}/>
      </View>
    )
  }
}

export default Logo;
