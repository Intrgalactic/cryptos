import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from 'pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
