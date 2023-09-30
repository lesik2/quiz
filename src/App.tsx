import { useContext } from 'react';
import Test from './components/form/Test';
import { ResultContext } from './context/ResultProvider';
import Result from './components/form/Result';
import './styles/global.css';

function App() {
  const {result} = useContext(ResultContext);
  return (
    <div className="App">
      {result ? <Result /> : <Test />}
    </div>
  );
}

export default App;
