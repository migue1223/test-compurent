import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const RegisterScreen = ({ history }) => {
  const { signUp, error, message } = useContext(AuthContext);

  const [
    { id, name, email, password, direction, phone, city },
    handleInputChange,
    reset,
  ] = useForm({
    id: '',
    name: '',
    email: '',
    password: '',
    direction: '',
    phone: '',
    city: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    signUp({ id, name, email, password, direction, phone, city });

    reset();
  };

  const todoOk = () => {
    return id.length > 0 &&
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      direction.length > 0 &&
      phone.length > 0 &&
      city.length > 0
      ? true
      : false;
  };
  return (
    <div className='container-login100 mt-5'>
      <h1>Register Screen</h1>

      <form
        className='login100-form validate-form flex-sb flex-w mt-3'
        onSubmit={onSubmit}
      >
        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='number'
            name='id'
            placeholder='CC'
            value={id}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='text'
            name='name'
            placeholder='Nombre'
            value={name}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

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

        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='text'
            name='direction'
            placeholder='Dirección'
            value={direction}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='text'
            name='phone'
            placeholder='Teléfono'
            value={phone}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='wrap-input100 validate-input mb-3'>
          <input
            className='input100'
            type='text'
            name='city'
            placeholder='Ciudad'
            value={city}
            onChange={handleInputChange}
          />
          <span className='focus-input100'></span>
        </div>

        <div className='row mb-3'>
          <div className='col text-center'>
            <Link to='/login' className='txt1'>
              Login?
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
