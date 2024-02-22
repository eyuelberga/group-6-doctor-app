import './App.css';
import fakeData from "./MOCK_DATA.json";
import { useTable } from "react-table";

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
