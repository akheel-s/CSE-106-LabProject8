// import './App.css';
import Login from './login';
import Navbar from './navbar';
import S_dashboard from './s_dashboard';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import T_dashboard from './t_dashboard';
import Course_view from './course_page';

function App() {
  return (
    <Router>
    <div className="Login">
      {/* <Navbar></Navbar> */}
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Switch>
        <Route path="/s_dashboard">
          <Navbar></Navbar>
          <S_dashboard></S_dashboard>
        </Route>
      </Switch>
      <Switch>
        <Route path="/t_dashboard">
          <Navbar></Navbar>
          <T_dashboard></T_dashboard>
        </Route>
      </Switch>
      <Switch>
        <Route path="/Course_view">
          <Navbar></Navbar>
          <Course_view></Course_view>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
