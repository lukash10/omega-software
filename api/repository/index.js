const { User, Post, Pole, Course, CoursePole, Tag, Doc} = require('./models.js');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { randomUUID } = require('crypto');

module.exports = {
  getCounts: async () => {
    try {
      var users = await User.count();
      var poles = await Pole.count();
      var courses = await Course.count();
      var posts = await Post.count();

      return { users, poles, courses, posts };
    } catch (e) {
      console.log(e);
    }
  },
  doLogin: async (auth) => {
    try {
      var result = {
        success: false,
        token: null,
      };

      const user = await User.findOne({ where: { email: auth.login } });
      console.log(user);

      if (!user) {
        return result;
      }

      result.success = bcrypt.compareSync(auth.password, user.password);
      console.log(result.success);

      user.password = undefined;

      if (result.success) {
        result.token = jwt.sign({ userId: user.id }, 'myjwtsecret', {
          expiresIn: '10000000d',
        });
      }

      return result;
    } catch (e) {
      console.log(e);
    }
  },
  createUser: async (user) => {
    try {
      user.password = bcrypt.hashSync(user.password, 10);

      const result = await User.create(user);

      return result;
    } catch (e) {
      console.log(e);
    }
  },
  updateUser: async (id, user) => {
    try {
      const userToUpdate = await User.findOne({ where: { id: id } });

      if (user.password) {
        user.password = bcrypt.hashSync(user.password, 10);
      }

      userToUpdate.update(user);

      return userToUpdate;
    } catch (e) {
      console.log(e);
    }
  },
  deleteUser: async (id) => {
    try {
      const code = await User.destroy({ where: { id: id } });

      return code;
    } catch (e) {
      console.log(`Error ao deletar o usuario ${id}`, e);
    }
  },
  findAllUsers: async () => {
    try {
      var users = await User.findAll({
        order: [['name', 'ASC']],
        attributes: { exclude: ['password']}
      });

      return users;
    } catch (e) {
      console.log(e);
    }
  },
  findOneUser: async (id) => {
    try {
      var user = await User.findOne({
        where: { id: id },
        attributes: { exclude: ['password']}
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  },
  

};
