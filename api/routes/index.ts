import { Router } from 'express';
import { helloWorld } from './hello-world';

export const routes = Router();

routes.get('/hello', helloWorld);
