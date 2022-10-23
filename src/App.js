import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import GithubProvider from './context/githubContext';
import AlertContextProvider from './context/alertContext';
import Alert from './components/layouts/Alert';

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
      <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notFound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>

  );
}

export default App;
