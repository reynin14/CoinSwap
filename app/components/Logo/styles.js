import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 1.5;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $smallContainerSize: imageWidth / 2,
  container: {
    alignItems: 'center'
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
});
