import './App.css';
import ReactDOM from 'react-dom';
function App() {
  const element=(
      <div id ="root">
      <h1> "Cognitive Clouds React Training" </h1>
      <h2>it is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    
    ReactDOM.render(element,document.getElementById('root'));
}

setInterval(App,1000);
export default App;
