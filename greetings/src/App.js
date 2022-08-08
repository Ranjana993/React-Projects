import './App.css';

const App = () => {
  const time = new Date()
  const currTime = time.getHours()
  let greet = ""
  let style = {}

  if (currTime >= 1 && currTime < 12) {
    greet = "Good Morning"
    style.color = 'green'
  }
  else if (currTime >= 12 && currTime < 19) {
    greet = "Good AfterNoon"
    style.color = "orange"
  }
  else {
    greet = "Good Night";
    style.color = "black"
  }
  return (
    <div className="App">
      <div className="main__card">
        <h2>Hello Sir/Madam  <span style={style}> {greet}</span></h2>
      </div>
    </div>
  );
}

export default App;
