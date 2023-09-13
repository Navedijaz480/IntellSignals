import{ BrowserRouter,  Routes, Route,} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
   <BrowserRouter>
   <div>
    <Navbar />
    <main className='w-full flex flex-col items-center bg-gr'>
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </main>
      <Footer/>
   </div>
   </BrowserRouter>
  );
}

export default App;
