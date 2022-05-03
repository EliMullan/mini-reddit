import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Search from './features/search/Search';
import Subreddits from './features/Subreddits/Subreddits';


function App() {
  return (
    <div className='App'>
      <header>
         Mini Reddit Student Version
      </header>
      <section className='search-select-container'>
       <Subreddits />
        <Search  />
      </section>
      <main>
        <Home />   
      </main>
    </div>
  );
}

export default App;
