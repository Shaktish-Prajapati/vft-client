import './App.css';
import store from './redux/Store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FileUpload from './component/fileUpload/FileUpload';
import Payment from './component/payment/Payment';
import Navbar from './component/navbar/Navbar'
import {Layout} from 'antd'
import AppHeader from './component/header/Header';
import AppFooter from './component/footer/Footer';
import Landing from './component/content/landing/Landing';
import Website from './component/content/weOffer/website/Website';
import Register from './component/content/users/Register'
// import Login from './component/content/users/Login_s.js';
import Login from './component/content/users/Login.js';
import AboutUs from './component/content/aboutUs/AboutUs'
import ProtectedRoute from './component/protection/ProtectedRoute'
import Footer  from './component/footer/Footer'


function App() {
  
  return (
    <Provider store={store}>
      <Layout >
        <Router>
          <Navbar/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/user' />
          {/* PROTECTED ROUTES: ACCESS AFTER LOGIN ONLY!!! */}
          {/* <ProtectedRoute path='/website' component={Website}/> */}
          <Route path='/website' component={Website}/>
        </Switch>
        <Footer/>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
