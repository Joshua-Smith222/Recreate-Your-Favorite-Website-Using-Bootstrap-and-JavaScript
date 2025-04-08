// App.jsx
import Rea
import { Routes, Route, Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
