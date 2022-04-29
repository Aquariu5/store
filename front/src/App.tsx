import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import init from './components/init/initApp';


function App() {
  init();
  return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
