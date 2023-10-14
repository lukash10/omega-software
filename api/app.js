const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./config/routes');


require('dotenv').config();

const PORT = process.env.PORT;
const path = require('path');


var corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//app.use(authMiddleware);
app.use('/api', routes());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));




const { db } = require('./config/sequelize.js');
db.sync();

// db.query('SET FOREIGN_KEY_CHECKS = 0');
// db.sync({ force: true });
// db.query('SET FOREIGN_KEY_CHECKS = 1');
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
