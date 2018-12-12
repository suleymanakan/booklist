import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/Page/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import BookDetailPage from './components/Page/BookDetailPage';
import NewBookPage from './components/Page/NewBookPage';

class App extends Component {
  state={
    books: [
      {kitap_no:1, kitap_ad:"Alamut", kitap_yazar:"Süleyman", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:2, kitap_ad:"Olasılıksız", kitap_yazar:"Coni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:3, kitap_ad:"Mavi", kitap_yazar:"Ceni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:4, kitap_ad:"Mavi", kitap_yazar:"Ceni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:1, kitap_ad:"Alamut", kitap_yazar:"Süleyman", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:2, kitap_ad:"Olasılıksız", kitap_yazar:"Coni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:3, kitap_ad:"Mavi", kitap_yazar:"Ceni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"},
      {kitap_no:4, kitap_ad:"Mavi", kitap_yazar:"Ceni", kitap_yayin:"Sakan", kitap_resim_url:"https://s3.us-east-2.amazonaws.com/yazarokur-kitap/olasiliksiz.jpg"}
    
    ]
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <h1> Sakan</h1><br/>
          <Route path="/" exact render={(props)=>(<HomePage books={this.state.books}{...props}/>)} />
          <Route path= "/new" exact strict component={NewBookPage} />
          <Route path="/detail/:id" component={(props)=>(<BookDetailPage books={this.state.books}{...props}/>)} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
