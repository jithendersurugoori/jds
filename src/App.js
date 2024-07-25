import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import TextEditor from "./TextEditor";
import ItemList from "./ItemList";
import BookmarkList from "./BookmarkList";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import About from "./About";
import Profile from "./Profile";

const Home = () => (
  <div>
    <h2></h2>
    <TextEditor />
    
    <ItemList />
  </div>
);

const Bookmarks = () => (
  <div>
    <h2>Bookmarks</h2>
    <BookmarkList />
  </div>
);

const App = () => {
  return (
    
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/about" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
