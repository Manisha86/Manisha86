import React, {useContext} from 'react';
 import { FruitContext } from './App';

const SecondFruit=() => {
     const [fruit , setFruit]=useContext(FruitContext);
    return(
         <div>
          <p>Second Fruit:{fruit}</p>
          <button onClick={() => setFruit('Apple')}>Apple</button>
          <button onClick={() => setFruit('Banana')}>Banana</button>
         </div>
    );
 }

 export default SecondFruit;