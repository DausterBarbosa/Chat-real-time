import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    position: 'relative',
  },

  messageBox: {
    flex: 1,
    marginBottom: 65,
    paddingHorizontal: 20,
  },

  message: {
    maxWidth: '70%',
    borderRadius: 7,
    padding: 5,
    fontSize: 15,
    marginTop: 2,
  },

  sendMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },

  receivedMessage: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
  },

  footer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 5,
    left: 5,
    right: 5,
  },

  textField: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    maxHeight: 150,
  },

  textInput: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 18,
  },

  icon: {
    marginLeft: 20,
  },

  iconHidden: {
    display: 'none',
  },

  button: {
    backgroundColor: '#128C7E',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
});

export default styles;
