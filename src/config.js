import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000; // default port for dev

module.export = {
  PORT
};
