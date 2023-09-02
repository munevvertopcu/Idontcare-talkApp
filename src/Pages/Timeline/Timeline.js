import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import ContentInput from '../../components/modal/ContentInput';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './Timeline.style';
import parseContentData from '../../components/utils/parseContentData';
import MessageCard from '../../components/cards/MessageCard';

const Timeline = () => {
  const [contentInputVisible, setContentInputVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setContentInputVisible(!contentInputVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('messages/').push(contentObject);
  }

  const renderContent = ({item}) => <MessageCard message={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton name="plus" onPress={handleInputToggle} />
      <ContentInput
        visible={contentInputVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};

export default Timeline;
