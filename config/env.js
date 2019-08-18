import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

dotenvExpand(dotenv.config({
  path: path.resolve(process.cwd(), '/config/')
}));
global.isProduction = process.env.NODE_ENV === 'production';
