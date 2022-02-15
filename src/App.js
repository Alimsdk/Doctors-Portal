import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateOutlet from './Pages/Login/PrivateRoute/PrivateOutlet';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import NewDoctor from './Pages/Dashboard/NewDoctor/NewDoctor';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='dashboard/makeadmin' element={
          <AdminRoute><MakeAdmin/></AdminRoute>
        }/>
        <Route path='dashboard/newdoctor' element={<NewDoctor/>}/>
        <Route path='/dashboard/payment/:id' element={<Payment/>} />

        <Route path='/*' element={<PrivateOutlet/>}>
          <Route path='appointment' element={<Appointment/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>       
        </Route>

  
      </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
