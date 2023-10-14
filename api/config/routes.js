module.exports = () => {
  require('express-async-errors');

  const loginController = require('../controllers/login.controller.js');

  const router = require('express').Router();

  // Usuario e Login
  router.post('/login', loginController.doAuth);
  router.post('/user', loginController.create);
  router.get('/users', loginController.findListAndOne);
  router.put('/user/:id', loginController.edit);
  router.delete('/user/:id',loginController.delete);



  return router;
};
