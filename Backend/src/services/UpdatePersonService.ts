import AppError from "../Error/AppError";
import Person from "../models/Person";
import IPersonRepository from "../repositories/IPersonRepository";

interface IRequest {
  id: string;
  name: string;
  age: string;
  maritalstatus: string;
  cpf: string;
  city: string;
  state: string;
}

class UpdatePersonService {
  private personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute({ id, name, age, maritalstatus, cpf, city, state }: IRequest): Promise<Person> {
    const person = await this.personRepository.findByid(id);

    if(!person){
      throw new AppError('Person not found!');
    }

    if(cpf !== person.cpf){
      const verifyCpf = this.personRepository.findByCpf(cpf)

      if(!verifyCpf){
        throw new AppError('A person with this cpf already exists')
      }
    }

    person.name = name;
    person.age = age;
    person.maritalstatus = maritalstatus;
    person.cpf = cpf;
    person.city = city;
    person.state = state;

    await this.personRepository.save(person)
    return person;
  };
}

export default UpdatePersonService;
