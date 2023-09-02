import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Pages/Login/Login';
import Sign from './Pages/Sign/Sign';
import Timeline from './Pages/Timeline/Timeline';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log in" component={Login} />
      <Stack.Screen name="Sign up" component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth Stack"
            component={AuthStack}
          />
        ) : (
          <Stack.Screen
            name="Timeline"
            component={Timeline}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <Icon
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{marginRight: 10}}
                  name="logout"
                  size={35}
                  color="black"
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
