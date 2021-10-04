import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

function App() 
   {
  return (
    <form action ="results.html" method="GET" enctype="multipart/form-data">
    <div>
        <label for="name">name</label>
        <input type="text" name="name" id="name" placeholder="username"  min="a" max="z"/>
    </div>
    <div>
        <label>
        email
        <input type="email"name="email" id="email" placeholder="email" required/>
        </label>
    </div>
    <div>
        <label for="phone"> Phone </label>
        <input type="tel" name="phone" placeholder="phone number" required min="0" max="9"/>
    </div>
    <div>
        <label for="banana"> banana</label>
        <input type="checkbox" name="banana" id="banana"/>
    </div>
    <div>
        <label for="apple">apple</label>
        <input type="checkbox" name="apple" id="apple"/>
    </div>
    <div>
        Gender
        <div>
            <label for ="male"> male </label>
            <input type="radio" name="gender" id="male" value="male"/>
        </div>
        <div>
            <label for ="female"> female </label>
            <input type="radio" name="gender" id="female" value="female"/>
        </div>
    </div>
    <div>
        <label for = "eyeColor"> Eye Color</label>
        <select name="eyeColor" id="eyeColor" multiple>
            <option value= "Green">Green</option>
            <option label="Red" value="Red"></option>
        </select>
    </div>
    <div>
        <label for = "bio"> bio</label>
        <textarea id="bio" name="bio"></textarea>
    </div>
    <input type = "hidden" name="hidden" value="hi"/>
    <div>
        <label for="file"> File </label>
        <input id="file" type="file" name="file"/>
    </div>
    <div>
        <label for = "url">URL</label>
        <input type = "url" name="url" id="url"/>
    </div>
    <div>
        <label for="color">color</label>
        <input type="color" name ="color" id="color"/>
    </div>
    <button type ="reset">Reset</button>
    <button type ="submit"> Submit </button>
</form>
  );
}


export default App;
