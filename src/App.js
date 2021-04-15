import './App.css';
import Buttons from './components/Buttons'

function App() {


  function onPressButtons() {
    console.log('Hi from yo momma')
  }


  return (
    <div className="App">
      <header>Welcome to Color Beat!</header>
      <Buttons parentButtonPress={onPressButtons}/>
    </div>
  );
}

export default App;
