import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';


function App() {
  return (
    <div>
      <Home></Home>
      <Login/>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
