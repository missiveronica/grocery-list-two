import './App.css';
import image from './shopping.jpeg';
import imageTwo from './man.jpeg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} alt="grocery" width="250px"/>
      </div>
      <h1>Grocery List</h1>
      <GroceryList/>
      <div className='container'>
      <img src={imageTwo} alt="man" width="250px"/>
      </div>
    </div>
  );
}

export default App;
