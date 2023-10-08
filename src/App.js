
import { Routes , Route } from 'react-router-dom';
import './App.css';
import { BottomHeader } from './Main Components/BottomHeader';
import ExtraLinks from './Main Components/ExtraLinks';
import Footer from './Main Components/Footer';
import TopHeader from './Main Components/TopHeader';
import Landing from './Pages/Home/Landing';
import Categories from './Pages/Home/Categories';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Products from './Pages/Home/Products';
import Sale from './Pages/Home/Sale';
import { useDispatch } from 'react-redux';
import { addUser } from './RTK/Slicces/User';
import Profile from './Pages/Profile/Profile';

function App() {
  const dispatch = useDispatch()
  const cookies = document.cookie;
  if(cookies != ""){
    dispatch(addUser(JSON.parse(cookies.slice(9))))   
  }

  return (
    <div className="App">
      
      <Routes>
          <Route path='/' element={
          <>
            <TopHeader/>
            <BottomHeader />
            <ExtraLinks />
            <Landing/>
            <Categories />
            <Products/>
            <Sale/>
            <Footer />
          </>
          } />

          <Route path='/signin' element={
            <>
              <BottomHeader />
              <ExtraLinks />
              <SignIn />
          </>
          }/>

          <Route path='/signup' element={
            <>
              <BottomHeader />
              <ExtraLinks />
              <SignUp />
            </>
          }/>

          <Route path='/profile/:userId' element={
          <>
          <BottomHeader/>
          <Profile/>
          <Footer/>
          </>
        }></Route>
      </Routes>

      
    </div>
  );
}

export default App;
