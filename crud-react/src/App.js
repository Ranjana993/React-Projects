import './App.css';
import { Routes, Route } from "react-router-dom"
import SingleCard from './components/SingleCard/SingleCard';
import Home from './components/Home/Home';

function App() {
  return (

    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='movie/:id' element={<SingleCard />} />
    </Routes>

  );
}

export default App;
