import React from 'react';
import {View, Image, Text} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import IconCamera from 'react-native-vector-icons/FontAwesome';
import IconOpt from 'react-native-vector-icons/Feather';

import styles from './styles';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.profile}>
        <Icons name="arrow-back" color="#FFF" size={23} />
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://pipeify.com/wp-content/uploads/2020/09/supergirl-melissa-benoist-fim-da-serie_fixed_large.jpg',
          }}
        />
        <Text style={styles.name}>Melissa</Text>
      </View>
      <View style={styles.panel}>
        <IconCamera name="video-camera" color="#FFF" size={20} />
        <Icons name="phone" color="#FFF" size={25} style={styles.icon} />
        <IconOpt name="more-vertical" color="#FFF" size={20} />
      </View>
    </View>
  );
}

export default Header;
