import React, { useCallback, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { SearchBar } from '../../components';
import styles from './styles';
import useBookListStore from '../../stores/bookListStore';
import { Book } from '../../types/book';
import { ScreenProps } from '../../types/screenProps';

const BookListScreen = ({ navigation }: ScreenProps<'BookList'>) => {
  const bookListState = useBookListStore();
  const { loadBooks } = bookListState;


  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  const onSubmitSeach = useCallback((search: string) =>{
    loadBooks(search);
  }, [loadBooks]);
  
  const renderItem = useCallback(({ item: book }: { item: Book }) => {
    return (
      <TouchableOpacity   
        onPress={() =>
          navigation.navigate('Book', {
            id: book.id
          })
        } 
        style={styles.item} key={book.id}
      >
        <Image style={styles.image} source={{uri: book.coverImageUrl}}/>
        <Text>{book.title}</Text>
      </TouchableOpacity>
    );
  }, [navigation]);

  const renderBooks = useCallback(() => {
      if(!bookListState.books.length){
        return <View><Text>Empty list</Text></View>;
      }
      return (
        <FlatList
          style={styles.list}
          data={bookListState.books}
          renderItem={renderItem}
          keyExtractor={(item: Book) => item.id}
        />
      );
  }, [bookListState.books, renderItem]);

  const renderLoading = useCallback(() => {
    if (!bookListState.loading) {
      return null;
    }
    return (
      <ActivityIndicator
        size='large'
        color='#0000ff'
      />
    );
  }, [bookListState.loading]);
  
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <View style={styles.title}><Text>Books...</Text></View>
        <SearchBar 
          onSubmit={onSubmitSeach}
        />
        {renderLoading()}
        {renderBooks()}
      </View>
    </View>
  );
}

export default BookListScreen;
