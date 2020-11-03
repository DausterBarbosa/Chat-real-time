import React, {useState, useMemo, useEffect} from 'react';
import {
  StatusBar,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

import io from 'socket.io-client';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from './components/Header';

import Background from './assets/images/background.png';

import styles from './styles';

interface MessageListProps {
  user_id: number;
  message: string;
}

function App() {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState<Array<MessageListProps>>([]);

  const socket = useMemo(
    () =>
      io('http://192.168.0.109:3333', {
        query: {
          user_id: 2,
        },
      }),
    [],
  );

  useEffect(() => {
    socket.on('menssageReceived', (data: MessageListProps) => {
      setMessagesList([data, ...messagesList]);
    });
  }, [socket, messagesList]);

  function handleSendMessage() {
    setMessagesList([{user_id: 2, message}, ...messagesList]);
    socket.emit('sendMessage', {from: 2, to: 1, message});
    setMessage('');
  }

  return (
    <>
      <StatusBar backgroundColor="#054e46" />
      <Header />
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={Background}>
          <FlatList
            style={styles.messageBox}
            data={messagesList}
            keyExtractor={(item, index) => String(index)}
            inverted
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={[
                      styles.message,
                      item.user_id === 2
                        ? styles.sendMessage
                        : styles.receivedMessage,
                    ]}>
                    {item.message}
                  </Text>
                </View>
              );
            }}
          />
          <View style={styles.footer}>
            <View style={styles.textField}>
              <Entypo name="emoji-happy" size={25} color="#999" />
              <TextInput
                placeholder="Type a message"
                style={styles.textInput}
                multiline
                value={message}
                onChangeText={(e) => setMessage(e)}
              />
              <Feather name="paperclip" size={21} color="#999" />
              <FontAwesome
                name="camera"
                color="#999"
                size={20}
                style={[styles.icon, message !== '' && styles.iconHidden]}
              />
            </View>
            {message === '' ? (
              <TouchableOpacity style={styles.button}>
                <FontAwesome name="microphone" color="#FFF" size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={handleSendMessage}>
                <MaterialIcons name="send" color="#FFF" size={23} />
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default App;
