import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    backgroundColor: '#d9dbda',
    borderRadius: 15,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
  clearSearch: {
    width: 24, 
    height: 24, 
    backgroundColor: '#565857',
    borderRadius: 12,
    justifyContent: 'center',
  },
  clearSeachText: {
    fontSize: 18,
    lineHeight: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});