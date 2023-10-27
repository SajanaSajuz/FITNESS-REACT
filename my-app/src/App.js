import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom" //npm i react-router-dom
import Login from "./Pages/Login"
import Main from './Pages/Main';
import Addtrainer from './Pages/Addtrainer/Addtrainer';
import Diet from './Pages/Diet/Diet';
import Class from './Pages/Class/Class';
import Viewtrainer from './Pages/Viewtrainer';
import Product from './Pages/Product/Product';
import Viewproduct from './Pages/Viewproduct';
import Trainerhome from './Pages/Trainerhome';
import Trainerdetails from './Pages/Trainerdetails';
import Traineredit from './Pages/Traineredit';
import Viewclasses from './Pages/Viewclasses';
import Orderedproduct from './Pages/Orderedproduct';
import Orderedtrainer from './Pages/Orderedtrainer';
import Trainer_userlist from './Pages/Trainer_userlist';
import Viewbookedtrainers from './Pages/Viewbookedtrainers';
import Payment from './Pages/Payment';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/addtrainer' element={<Addtrainer/>}/>
      <Route path='/adddiet' element={<Diet/>}/>
      <Route path='/addclass' element={<Class/>}/>
      <Route path='/addproduct' element={<Product/>}/>
      <Route path='/viewtrainer' element={<Viewtrainer/>}/>
      <Route path='/viewclasses' element={<Viewclasses/>}/>
      <Route path='/viewproduct' element={<Viewproduct/>}/>
      <Route path='/trainerhome' element={<Trainerhome/>}/>
      <Route path='/trainerdetails/:id' element={<Trainerdetails/>}/>
      <Route path='/traineredit/:id' element={<Traineredit/>}/>
      <Route path='productOD' element={<Orderedproduct/>}/>
      <Route path='trainerOD' element={<Orderedtrainer/>}/>
      <Route path='trainer-userlist' element={<Trainer_userlist/>}/>
      <Route path='user-trainerlist' element={<Viewbookedtrainers/>}/>
      <Route path='payment' element={<Payment/>}/>
      

      
            </Routes>
    </BrowserRouter>
  );
}

export default App;
