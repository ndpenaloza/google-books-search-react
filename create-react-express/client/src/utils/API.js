import axios from 'axios';

export default {
  findBooks: function(url) {
    return axios.get(url);
  },
  getBooks: function(id) {
    return axios.get('/api/books' + id)
  },
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  },
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  }
}