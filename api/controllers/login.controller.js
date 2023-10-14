const db = require("../repository");
const bcrypt = require("bcrypt");
const { User } = require("../repository/models");

module.exports = {
  
  doAuth: async (req, res) => {
    const auth = req.body;

    const data = await db.doLogin(auth);

    res.send( data );
  },
  findListAndOne: async (req, res) => {
    const id = req.query.id;

    if (id) {
      res.send(await db.findOneUser(id));
      return;
    }

    res.send(await db.findAllUsers());
  },
  create: async (req, res) => {
    const user = req.body;

    const data = await db.createUser(user);
  
    res.send({ data });
  },
  delete: async (req, res) => {

    const id = req.params.id;

    const result = await db.deleteUser(id);

    res.send({ result });

  },
  edit: async (req, res) => {

    const id = req.params.id;
    const user = req.body;

    const result = await db.updateUser(id, user);

    res.send(result);
  }
};