import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/TextInput/Input';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorParser from '../../components/utils/authErrorParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const goBackLogin = () => {
    navigation.goBack();
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords are not the same! Please enter the same passwords.',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Account created successfully!',
        type: 'success',
      });
      navigation.navigate('Log in');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image}
          source={require('../../assets/image.png')}
        />
        <Text style={styles.header_text}>I do not care!</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="Enter your e-mail..."
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="Enter your password..."
              secureTextEntry
            />
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder="Enter your password again..."
              secureTextEntry
            />
            <Button text={'Sign up'} onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text={'Back to Login'} theme="secondary" onPress={goBackLogin} />
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_text}>Write... Read... Relax...</Text>
      </View>
    </View>
  );
};

export default Sign;
