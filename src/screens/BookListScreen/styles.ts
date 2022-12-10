import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 15,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    marginVertical: 20
  },
  list: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderBottomColor: '#0000ff', 
    height: 120,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 100,
    marginRight: 15,
  }
});