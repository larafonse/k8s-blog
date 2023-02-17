import './App.css';
import { blogs } from './data';
import {Home} from './components/Home'
function App() {
  return (
    <Home blogs={blogs} />
  );
}

export default App;
