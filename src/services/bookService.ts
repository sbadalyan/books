import axios from 'axios';
import config from '../config';
import { Book } from '../types/book';

const bookService = {
  getBookList(search?: string) {
    return axios.get<{
      books: Book[];
    }>(`${config.apiBookUrl}/books?q=${search || ''}`);
  },
  getBook(id: string) {
    return axios.get<{
      book: Book;
    }>(`${config.apiBookUrl}/books/${id}`);
  }
}

export default bookService;
