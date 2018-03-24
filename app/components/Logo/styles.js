import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth * 1.3,
  $largeImageSize: imageWidth / 1,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logo: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue',
  },
  text: {
    color: '$white',
    fontSize: 18,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
