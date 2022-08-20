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
        <Route path="/users/view" element={<TableData/>}>
          <Route index path="/users/create" element={<UserForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
