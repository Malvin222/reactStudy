import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import FloationPopulationList from './Floationg_population/floationPopulationList';
import LoginForm from './LoginForm';
import reactRouter2 from './R089_reactRouter2';
import reactThrottle from './R095_reactThrottle';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/>
        {/* react18 이상 라우터 6버전이상 Routes로 감싸줘야함 */}
        <Routes>
        <Route exact path='/' element={<LoginForm/>} />
        <Route exact path='/Throttle' Component={reactThrottle} />
        <Route exact path='/reactRouter2' Component={reactRouter2} />
        <Route exact path='/FloationPopulationList' element={<FloationPopulationList/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;