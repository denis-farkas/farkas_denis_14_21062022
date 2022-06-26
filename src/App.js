import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Employees from './pages/employees.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
