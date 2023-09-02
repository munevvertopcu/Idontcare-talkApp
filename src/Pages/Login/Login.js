import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/TextInput/Input';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorParser from '../../components/utils/authErrorParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('Sign up');
  };
  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('Timeline');

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
            <Button text={'Log in'} onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text={'Sign up'} theme="secondary" onPress={handleSignUp} />
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_text}>Write... Read... Relax...</Text>
      </View>
    </View>
  );
};

export default Login;
