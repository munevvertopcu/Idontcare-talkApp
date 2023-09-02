import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#1e88e5',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    elevation: 4,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: '#e0e0e0',
  },

  date: {
    color: '#e0e0e0',
  },
  text: {
    color: 'white',
    paddingTop: 15,
  },
  elevation: {
    elevation: 20,
    shadowColor: 'black',
  },
});
