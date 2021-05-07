import { Router } from "express";
import PersonController from "../Controllers/PersonController";

const personRoutes = Router();
const personController = new PersonController();

personRoutes.get('/', personController.index);
personRoutes.get('/paginated', personController.paginated);
personRoutes.get('/:id', personController.show);
personRoutes.post('/', personController.create);
personRoutes.put('/:id', personController.update);
personRoutes.delete('/:id', personController.destroy);


export default personRoutes;
