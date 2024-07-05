import { Router } from 'express';
import { getUser } from './get-user';
import { createUser } from './create-user';

export const routes = Router();

routes.get('/users', getUser);
routes.post('/users', createUser);
routes.get('/health', (req, res) => res.send('ok'));
