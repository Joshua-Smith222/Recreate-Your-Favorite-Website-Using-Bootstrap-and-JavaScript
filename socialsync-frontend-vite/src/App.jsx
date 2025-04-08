import { Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
