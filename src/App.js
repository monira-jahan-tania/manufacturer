import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReviews from './Pages/Dashboard/AddReviews';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Protfolio from './Pages/Protfolio';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/protfolio' element={<Protfolio />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<AddReviews />}></Route>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageAllOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='addProducts' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>

        </Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
