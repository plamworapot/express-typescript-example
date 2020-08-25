import dotenv from 'dotenv';
dotenv.config();

const port = parseInt(`${process.env.PORT}`, 10) || 3000;

export { port };
