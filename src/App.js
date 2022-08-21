import logo from './logo.svg';
import './App.css';
import { UserModule } from './UserModule';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
     <UserModule></UserModule>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
