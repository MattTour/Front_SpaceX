import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Launches from './pages/launches';
import Home from './pages/home';
import Capsules from './pages/capsules';

import './index.css';

const App = () => {

    return <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/launches/" element={<Launches/>}></Route>
        <Route path="/capsules/" element={<Capsules/>}></Route>
      </Routes>
    </Router>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
