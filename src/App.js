import './App.css';
import students from './data/students';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage data = {students}/>
    </div>
  );
}

export default App;
