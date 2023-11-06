import React, { useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import App from '../App';
import filterbyname from '../components/filterbyname/filterbyname';
import filterbystatus from '../components/filterbystatus/filterbystatus';

const AppRouter = () => {
    useEffect(() => {
        if (window.location.pathname === '/') {
          window.location.replace('/home');
        }
      }, []);

    return(
        <Router>
            <Routes>
                <Route path='' />
                <Route path='/home' Component={App}/>
                <Route path='/character/:id' Component={filterbystatus} />
                <Route path='/character/name/:id' Component={filterbyname} />
            </Routes>
        </Router>
    )
}

export default AppRouter;