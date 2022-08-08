import { useState } from 'react';
import './App.css';


const App = () => {
  const [data, setData] = useState([])
  const [btn, setBtn] = useState(false)

  const CovidDataStateWise = async () => {
    const data = await fetch('https://data.covid19india.org/data.json')
    const finalData = await data.json()
    // console.log("hello");
    const actualData = finalData.statewise
    // console.log(actualData);
    setData(actualData)
    setBtn(true)
  }


  return (
    <>
      <div className="App">
        <h1>Check the covid report ...</h1>
        <button onClick={CovidDataStateWise}>click to see the magic</button>
        {
          btn ? <div className="cards">
            {data.map((actualData, index) => {
              return <ul className="card" key={index}>
                <h2>State : <span>{actualData.state}</span> </h2>
                <li>Active Case :  <span>{actualData.active} </span></li>
                <li>Death : <span> {actualData.deaths} </span></li>
                <li>Confirmed :<span> {actualData.confirmed}</span></li>
                <li>StateCode :  <span>{actualData.statecode}</span> </li>
              </ul>
            })
            }
          </div> : null
        }

      </div>
    </>
  );
}

export default App;
