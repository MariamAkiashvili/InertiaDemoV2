
import './App.css';
import Appbar from './components/Appbar';
import AuthorizationForm from './components/AuthorizationForm';
import RegistrationForm from'./components/RegitrationForm';


function App() {

  
  return (
    <div className="App">
      <Appbar/>
      <RegistrationForm/>
      <AuthorizationForm/>

    </div>
  );
}

export default App;
