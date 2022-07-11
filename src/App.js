import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Employees from './pages/employees.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import { EmployeesProvider } from './context/EmployeesProvider';
import { EmployeeProvider } from './context/EmployeeProvider.jsx';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <EmployeeProvider>
          <EmployeesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<Employees />} />
            </Routes>
          </EmployeesProvider>
        </EmployeeProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
