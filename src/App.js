import axios from 'axios';
import './App.css';
import Dogs from './components/Dogs';
import { useEffect, useState } from 'react';



function App() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogData = async () => {
      const respDog = await axios.get('https://dog.ceo/api/breeds/list/all');
      setDogs(respDog.data.message);
    }
    getDogData();
  }, []);



  return (
    <div className="App">
      <h1>Dog's Breed</h1>
      <div className= "dogs">
        {Object.keys(dogs).map((key) =>
          <Dogs
            breed={key}
            subBreed={dogs[key]}
            />)}
      </div>

    </div>
  );
}

export default App;
