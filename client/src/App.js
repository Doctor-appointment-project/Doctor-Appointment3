
import react from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner';
import Protected from './components/Protected';
import Public from './components/Public';

import Applydoctor from './pages/Applydoctor';
import Notification from './pages/Notification';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import Profile from './pages/doctor/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/appointments';
import DoctorAppointments from './pages/doctor/Doctorappointments';
function App() {
  const {loading}=useSelector(state=>state.alerts)
  return (
    <>
   <BrowserRouter>
   {loading?<Spinner/>:
   
   <Routes>
        <Route path='/' element={
          <Protected>
        <Home/>
        </Protected>
        }/>
        <Route path='/apply-doctor' element={
          <Protected>
        <Applydoctor/>
        </Protected>
        }/>
        <Route path='/admin/users' element={
          <Protected>
        <Users/>
        </Protected>
        }/>
        <Route path='/admin/doctors' element={
          <Protected>
        <Doctors/>
        </Protected>
        }/>
        <Route path='/doctor/profile/:id' element={
          <Protected>
        <Profile/>
        </Protected>
        }/>
        <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <Protected>
                  <BookingPage />
                </Protected>
              }
            />
        <Route path='/notification' element={
          <Protected>
        <Notification/>
        </Protected>
        }/>
        <Route path='/appointment' element={
          <Protected>
        <Appointments/>
        </Protected>
        }/>
        <Route path='/doctor-appointments' element={
          <Protected>
        <DoctorAppointments/>
        </Protected>
        }/>
        <Route path='/login' element={
          <Public>
        <Login/>
        </Public>}/>
        <Route path='/register' element={
        <Public><Register/>
        </Public>
        }/>
   </Routes>
}
   </BrowserRouter>
  
   </>
  );
}

export default App;
