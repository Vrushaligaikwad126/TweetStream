import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Correct import
import HomePage from './components/HomePage/HomePage';
import Authentication from './components/Authentication/Authentication';

function App() {
  // Here you can define the condition to determine which component to render
  const isAuthenticated = true; // Replace this with your actual authentication logic

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={false ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
