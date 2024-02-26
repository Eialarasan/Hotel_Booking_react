import { Route, Routes } from 'react-router';
import './App.css';
import HotelBooking from './Component/HotelBooking';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormDetails from './Component/FormDetails';

function App() {
  return (
    <div className="background">
      <Routes>
        <Route path='/' element={<HotelBooking/>}></Route>
        <Route path='/form' element={<FormDetails/>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
