/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello' }));

export default routes;
