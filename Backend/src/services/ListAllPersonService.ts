import Person from "../models/Person";
import IPersonRepository from "../repositories/IPersonRepository"

class ListAllPersonService {

  private personsRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository){
    this.personsRepository = personRepository;
  }

  public async execute(): Promise<Person[]> {
    const persons = await this.personsRepository.findAll();

    return persons;
  }
}

export default ListAllPersonService
