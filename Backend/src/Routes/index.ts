import {Router} from 'express'
import personRoutes from './person';

const routes = Router();
const prefixRoutes = '/api'

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Devs 👈" });
});

routes.use(`${prefixRoutes}/person`, personRoutes)

export default routes;
