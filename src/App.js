import './App.css';
import SubredditList from './features/subredditList/SubredditList';
import Search from './features/search/Search';
import Home from './features/home/Home';

function App() {
  return (
    <div className='App'>
      <header>
         Mini Reddit Student Version
      </header>
      <section className='search-select-container'>
       <SubredditList />
        <Search  />
      </section>
      <main>
        <Home />   
      </main>
    </div>
  );
}

export default App;
