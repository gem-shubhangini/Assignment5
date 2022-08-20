import logo from './logo.svg';
import './App.css';
import UserForm from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './Table';
function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
      <Routes>
        <Route path="/Assignment5/users/view" element={<TableData/>}>
        <Route index  element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
