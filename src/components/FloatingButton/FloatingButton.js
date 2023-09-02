import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';

const FloatingButton = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.icon} name={name} color="white" size={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
