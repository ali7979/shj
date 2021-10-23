import './css/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Login from './Components/Login';
import Header from './Components/Header'
import UploadVideoScreen from './screens/UploadVideoScreen';
import ProfileScreen from './screens/ProfileScreen';
import Dashboard from './screens/Dashboard';
import dshbrd from './screens/dshbrd';
import hmepg from './screens/hmepg';
import Signup from './Components/Signup';
import sigup from './screens/signup';
import upldsc from './screens/upldsc';
import signin from './screens/signin';

function App() {
  return ( 
  <BrowserRouter>
    <div className="container">
    {/* <header>
      <Header/>
    </header> */}
    <main>
    <Switch>
        <Route path="/post" exact component={hmepg} />
        <Route path="/login" exact component={Login} />
        <Route path="/hme" exact component={hmepg} />
        <Route path="/" exact component={upldsc}/>
        <Route path="/u" exact component={UploadVideoScreen}/>
        <Route path="/dash" exact component={Dashboard}/>
        <Route path="/dsh" exact component={dshbrd}/>
        <Route path="/signup" exact component={sigup}/>
        <Route path="/signin" exact component={signin}/>

        <Route path="/profile/:email" exact component={ProfileScreen}/>
    </Switch>
    </main>
   {/* <footer>
        <a href="index.html">About    </a>   <a href="index.html">  Contact </a>  <a href="index.html">Carrers</a> <a href="index.html">Advertise</a>     <a href="index.html">DevCopers</a> <a href="index.html">Help</a>    
        <a href="index.html">Safety Terms</a>  <a href="index.html">Privacy  © 2021 13k13</a>  
        </footer> */}
    </div>   
    </BrowserRouter>
  );
}

export default App;
