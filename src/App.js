import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <div class="bg">
      {/* <NavBar></NavBar>
      <Home></Home> */}
     {/* <SignUpForm></SignUpForm> */}

     <SignInForm></SignInForm>
     
    </div>
  );
}

export default App;
