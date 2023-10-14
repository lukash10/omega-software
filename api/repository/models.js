const { sequelize, db } = require('../config/sequelize.js');

const generateModels = (model, dataTypes) => {
  
  const User = model.define('users', {
    id: {
      type: dataTypes.UUID,
      defaultValue: dataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    role: {
      type: dataTypes.STRING,
      allowNull: false,
      defaultValue: "COLAB",
    }
  });
  

  return { User };
};

module.exports = generateModels(db, sequelize);
