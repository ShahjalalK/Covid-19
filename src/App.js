import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Cards, Carts, CuntryPicker} from './Components/Index'

function App() {
  return (
    <div className="App">
      <Cards />
      <Carts />
      <CuntryPicker />
    </div>
  );
}

export default App;
