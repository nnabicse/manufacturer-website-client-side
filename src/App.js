import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Reviews from './Pages/Reviews/Reviews/Reviews';
import Tools from './Pages/Tools/Tools/Tools';
import Purchase from './Pages/Purchase/Purchase';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers/ManageUsers';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders/MyOrders';
import Profile from './Pages/Dashboard/Profile/Profile';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts/ManageProducts';
import Message from './Pages/Dashboard/Message/Message';
import MakePayment from './Pages/Dashboard/MakePayment/MakePayment';
import Footer from './Shared/Footer/Footer';
import NavigationBar from './Shared/NavigationBar/NavigationBar';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="home" element={<Home></Home>} ></Route>
          <Route path="login" element={<Login></Login>} ></Route>
          <Route path="register" element={<Register></Register>} ></Route>
          <Route path="tools" element={<Tools></Tools>} ></Route>
          <Route path="reviews" element={<Reviews></Reviews>} ></Route>
          <Route path="blogs" element={<Blogs></Blogs>} ></Route>
          <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} ></Route>
          <Route path="purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>
          <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
            <Route index element={<RequireAuth><Message></Message></RequireAuth>}></Route>
            <Route path="manageorders" element={<RequireAdmin><RequireAuth><ManageAllOrders></ManageAllOrders></RequireAuth></RequireAdmin>} >Manage Orders</Route>
            <Route path="myorders" element={<RequireAuth><MyOrders></MyOrders></RequireAuth>} ></Route>
            <Route path="makepayment/:id" element={<RequireAuth><MakePayment></MakePayment></RequireAuth>} ></Route>
            <Route path='profile' element={<RequireAuth><Profile></Profile></RequireAuth>} ></Route>
            <Route path='addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>} ></Route>
            <Route path='manageusers' element={<RequireAdmin><RequireAuth><ManageUsers></ManageUsers></RequireAuth></RequireAdmin>} ></Route>
            <Route path='addproduct' element={<RequireAdmin><RequireAuth><AddProduct></AddProduct></RequireAuth></RequireAdmin>} ></Route>
            <Route path='manageproducts' element={<RequireAdmin><RequireAuth><ManageProducts></ManageProducts></RequireAuth></RequireAdmin>} ></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
