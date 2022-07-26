import { ToastContainer } from 'react-toastify';
import AuthContext from './context/AuthContext';
import Router from './router/Router';

function App() {
  return (
    <AuthContext>
      <Router />
      <ToastContainer />
    </AuthContext>
  );
}

export default App;