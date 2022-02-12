import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat/:id' element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
