import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
});
