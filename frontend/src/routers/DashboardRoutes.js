import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { AlbumScreen } from '../components/albunes/AlbumScreen';
import { MusicScreen } from '../components/music/MusicScreen';
import { CarritoScreen } from '../components/carrito/CarritoScreen';
import { AuthContext } from '../auth/AuthContext';

export const DashboardRoutes = () => {
  const { logged } = useContext(AuthContext);
  return (
    <>
      <div className='dashboardRoutes container mt-2'>
        <Switch>
          <Route exact path='/albunes' component={MusicScreen} />
          <Route exact path='/album/:albumId' component={AlbumScreen} />
          
          {!logged && <Route exact path='/login' component={LoginScreen} />}
          <Route exact path='/register' component={RegisterScreen} />

          {logged && <Route exact path='/carrito' component={CarritoScreen} />}

          <Redirect to='/albunes' />
        </Switch>
      </div>
    </>
  );
};
