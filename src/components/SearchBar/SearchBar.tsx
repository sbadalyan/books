import React, { useCallback, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PropsType = {
  onSubmit: (search: string) => void;
};

const SearchBar = ({
  onSubmit
}: PropsType) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const clearSearch = useCallback(() => {
    setSearchPhrase('');
    onSubmit('');
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(searchPhrase);
  }, [onSubmit, searchPhrase]);

  const renderClearButton = useCallback(() => {
    if(!searchPhrase){
      return null;
    } 

    return (
      <TouchableOpacity style={styles.clearSearch} onPress={clearSearch}>
        <Text style={styles.clearSeachText}>x</Text>
      </TouchableOpacity>
    );
  }, [searchPhrase, clearSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onSubmitEditing={handleSubmit}
        />
        {renderClearButton()}
      </View>
    </View>
  );
};

export default SearchBar;
