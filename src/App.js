import Header from './components/Header';
import TestHeader from './components/TestHeader'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={"Hello World"} />
      <TestHeader title={"Hello Test Header"} />
    </div>
  );
}

export default App;
