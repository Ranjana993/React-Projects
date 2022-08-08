import './App.css';
import Balance from './Component/Balance';
import Header from './Component/Header';
import History from './Component/History';
import IncomeExpensive from './Component/IncomeExpensive';
import NewTransection from './Component/NewTransection';
import { GlobalProvider } from "./Context/GlobalScope"

function App() {
  return (
    <GlobalProvider>
      <div className='main__container'>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpensive />
          <History />
          <NewTransection />
        </div>
      </div>
    </GlobalProvider>

  );
}

export default App;
