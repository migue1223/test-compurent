import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
  const { signIn, error, message } = useContext(AuthContext);

  const [{ email, password }, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    signIn({ email, password });

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
      history.replace('/albunes');
      reset();
    } else {
      history.replace('/login');
    }
  };

  const todoOk = () => {
    return email.length > 0 && password.length > 0 ? true : false;
  };

  return (
    <div className='container-login100 mt-5'>
      <h1>Ingreso</h1>

      <form
        className='login100-form validate-form flex-sb flex-w mt-3'
        onSubmit={onSubmit}
      >
        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='row mb-3'>
          <div className='col text-center'>
            <Link to='/register' className='txt1'>
              Nueva cuenta?
            </Link>
          </div>
        </div>

        {error && (
          <div className='row mb-3'>
            <div className='col text-center bg-danger'>{message}</div>
          </div>
        )}

        <div className='container-login100-form-btn m-t-17'>
          <button
            type='submit'
            className='login100-form-btn'
            disabled={!todoOk()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
