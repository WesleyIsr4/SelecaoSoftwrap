import AppError from "../Error/AppError";
import Person from "../models/Person";
import IPersonRepository from "../repositories/IPersonRepository"

class ShowPersonService {

  private personsRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository){
    this.personsRepository = personRepository;
  }

  public async execute(id: string): Promise<Person> {
    const person = await this.personsRepository.findByid(id);

    if(!person) {
      throw new AppError("Person not foud!", 400)
    }

    return person;
  }
}

export default ShowPersonService
