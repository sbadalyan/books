import create from 'zustand';
import { bookService } from '../services';
import { Book } from '../types/book';

type BookState = {
  book: Book | null;
  loading: boolean;
  loadBook: (id: string) => void; 
}

const useBookStore = create<BookState>((set) => ({
  book: null,
  loading: false,
  loadBook: async (id: string) => {
    set({ loading: true });
    const response = await bookService.getBook(id);
    set({ book: response.data.book, loading: false });
  },
}));

export default useBookStore;
