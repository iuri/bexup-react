import './App.css';

import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <DataFetching url={'http://localhost:8080/api/search/marcas'}/>
    </div>
  );
}

export default App;
