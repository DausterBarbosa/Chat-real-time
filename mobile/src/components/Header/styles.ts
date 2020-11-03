import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },

  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },

  panel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginLeft: 25,
    marginRight: 20,
  },
});

export default styles;
