import create from 'zustand';
import { bookService } from '../services';
import { Book } from '../types/book';

type BookListState = {
  books: Book[];
  loading: boolean;
  loadBooks: (search?: string) => void; 
}

const useBookListStore = create<BookListState>((set) => ({
  books: [],
  loading: false,
  loadBooks: async (search?: string) => {
    set({ loading: true });
    const response = await bookService.getBookList(search);
    set({ books: response.data.books, loading: false });
  },
}));

export default useBookListStore;
