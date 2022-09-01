import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LoginForm from './components/loginform/LoginForm.jsx';
import RegisterForm from './components/registerform/RegisterForm';
import NoMatch from './components/nomatch/NoMatch';

function App() {

  return (
    <BrowserRouter basename="/vet-react">
      <div>
        <div>Admin</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/no-match" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
