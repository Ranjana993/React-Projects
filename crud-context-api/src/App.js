import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import AddUser from './Components/AddUser';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/adduser' element={<AddUser />} />
        <Route exact path='/edituser/:id' element={<EditUser />} />
        <Route exact path='/deletuser' element={<DeleteUser />} />

      </Routes>
    </Router>
  );
}

export default App;
