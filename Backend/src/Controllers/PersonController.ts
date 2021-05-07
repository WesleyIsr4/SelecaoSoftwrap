import { Request, Response } from 'express';
import PersonRepository from '../repositories/PersonRepository';
import CreatePersonService from '../services/CreatePersonService';
import DeletePersonService from '../services/DeletePersonService';
import ShowPersonService from '../services/ShowPersonService';
import UpdatePersonService from '../services/UpdatePersonService';

class PersonController {
  public async index(request: Request, response: Response): Promise<Response> {
    const personRepository = new PersonRepository();

    const listAllPeople = await personRepository.findAll();

    return response.json(listAllPeople);
  }

   public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const personRepository = new PersonRepository();
    const personService = new ShowPersonService(personRepository);

    const person = await personService.execute(id)

    return response.json(person)
  }


  public async create(request: Request, response: Response): Promise<Response> {
    const { name, age, maritalstatus, cpf, city, state } = request.body;
    const personRepository = new PersonRepository();
    const createPerson = new CreatePersonService(personRepository);

    const person = await createPerson.execute({
      name,
      age,
      maritalstatus,
      cpf,
      city,
      state
    });

    return response.status(201).json(person);
  }


  public async update(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const { name, age, maritalstatus, cpf, city, state } = request.body;
    const personRepository = new PersonRepository();
    const updatePerson = new UpdatePersonService(personRepository);

    const person = await updatePerson.execute({
      id,
      name,
      age,
      maritalstatus,
      cpf,
      city,
      state
    });

    return response.json(person);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const personRepository = new PersonRepository();
    const destroyPerson = new DeletePersonService(personRepository);

    await destroyPerson.execute(id);

    return response.status(204).send();
  }
}

export default PersonController
