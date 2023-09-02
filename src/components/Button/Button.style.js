import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    margin: 5,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 6,
  },
  text: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#1e88e5',
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#1e88e5',
    },
    text: {
      ...base_style.text,
      color: '#1e88e5',
    },
  }),
};
