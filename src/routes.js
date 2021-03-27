import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';

import UserController from './app/controller/UserController'
import SessionController from './app/controller/SessionController'

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(MulterConfig)

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
    return res.json({ok: true});
})

export default routes;
