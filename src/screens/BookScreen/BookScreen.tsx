import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import useBookStore from '../../stores/bookStore';
import { ScreenProps } from '../../types/screenProps';
import styles from './styles';

function BookScreen({ route }: ScreenProps<'Book'>) {
  const bookState = useBookStore();
  const { loadBook } = bookState;

  useEffect(() => {
    loadBook(route.params.id);
  }, [loadBook, route.params.id]);
  if (bookState.loading) {
    return (
      <ActivityIndicator
        size='large'
        color='#0000ff'
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.image} source={{uri: bookState.book?.coverImageUrl}}/>
        <Text>{bookState.book?.title}</Text>
        <Text>{bookState.book?.author}</Text>
        <Text style={styles.synopsis}>{bookState.book?.synopsis}</Text>
      </View>
    </View>
  );
}

export default BookScreen;
