const { Router } = require('express');
const { check } = require('express-validator');

// controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// crear nuevos usuarios
router.post(
  '/new',
  [
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('name', 'El name es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('direction', 'La direction es obligatorio').not().isEmpty(),
    check('phone', 'El phone es obligatorio').not().isEmpty(),
    check('city', 'La city es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  crearUsuario
);

// login
router.post(
  '/login',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  login
);

// revalidar token
router.get('/renew', validarJWT, renewToken);

module.exports = router;
