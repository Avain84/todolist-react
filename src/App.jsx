import { Routes,Route } from 'react-router-dom';

import GuestLayout from './layouts/GuestLayout';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import TodoPage from './components/TodoPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/todolist-react/'>
          <Route element={<GuestLayout/>}>
            <Route index element={<HomePage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path='todo' element={<TodoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
