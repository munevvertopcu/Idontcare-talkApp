import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';

const MessageCard = ({message}) => {
  const formatDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formatDate}</Text>
      </View>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

export default MessageCard;
