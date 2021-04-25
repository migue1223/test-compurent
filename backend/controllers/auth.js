const { response } = require('express');
const bcrypt = require('bcryptjs');
const { users } = require('../data/users');

const { generarJWT } = require('../helpers/jwt');
const { randomUid } = require('../helpers/randomUid');

const crearUsuario = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    //verificar que el email no exista
    const existeEmail = users.find((user) => user.email === email);

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo ya existe',
      });
    }

    const user = req.body;
    user.uid = randomUid(20);

    // encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // guardar usuario en db
    users.push(user);

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //verificar si existe el correo
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: 'Email no encontrado',
      });
    }

    //validar el password
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: 'Password no es correcto',
      });
    }

    //generar el JWT
    const token = await generarJWT(user.uid);

    res.json({
      ok: true,
      user: user.uid,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

const renewToken = async (req, res) => {
  const uid = req.uid;

  //generar un nuevo JWT
  const token = await generarJWT(uid);

  //obtener el usuario por uid
  const user = users.find((user) => user.uid === uid);

  res.json({
    ok: true,
    user: user.uid,
    token,
  });
};

module.exports = {
  crearUsuario,
  login,
  renewToken,
};
