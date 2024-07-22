import React from 'react';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';
import { BookList } from './pages/BookList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  // return (
  //   <div>
  //     <Header />
  //     <Home />
  //   </div>
  // ) 
  //router

  return <Routes>
    <Route path="/" element={<Home  />}  />
    <Route path="/about" element={<About  />}  />
    <Route path="/contact" element={<Contact />} />
    <Route path="/books" element={<BookList />} />
    <Route path="/books/:id" element={<Book />} />
  </Routes>
}

export default App;
