import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 33,
    marginRight: 7,
  },
  text: {
    color: '$white',
    fontSize: 18,
    fontWeight: '300',
    paddingVertical: 20
  },
});
