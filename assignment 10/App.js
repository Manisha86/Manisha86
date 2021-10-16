import React from 'react';
import './App.css';
import SecondFruit from './SecondFruit';
import { useLocalState} from './Hooks';

export const FruitContext = React.createContext();

const App =() => {
    const [fruit,setFruit]=useLocalState('secondfruit');
    return(
        <FruitContext.Provider value={[fruit,setFruit]}>
            <p>
              Fruit:{fruit}      
            </p>
            <button OnClick={() => setFruit('apple')}> Apple </button>
            <button OnClick={() => setFruit('banana')}> banana </button>
            <SecondFruit/>
            </FruitContext.Provider>
    );
}

export default App;