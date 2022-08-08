import { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    if(name && password){
      const newEntry = { id: new Date().getTime().toString(), name, password }
      setAllData([...allData, newEntry])
      console.log(allData);
      setName("")
      setPassword("")
    }else{
      alert("Plz fill the data😟...")
    }
  }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
              autoComplete='off'
            />
          </div>
          <div className="form">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              placeholder='Enter Your Password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off'
            />
          </div>
          <button type="submit" >Submit</button>
        </form>

      </div>
      {
        allData.map((currData) => {
          return (
            <div className='data' key={currData.id}>
              <p>{currData.name}</p>
              <p>{currData.password}</p>
            </div>
          )
        })
      }

    </>
  );
}

export default App;
