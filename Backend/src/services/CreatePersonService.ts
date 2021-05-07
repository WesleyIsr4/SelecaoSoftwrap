import AppError from "../Error/AppError";
import Person from "../models/Person";
import IPersonRepository from "../repositories/IPersonRepository";

interface IRequest {
  name: string;
  age: string;
  maritalstatus: string;
  cpf: string;
  city: string;
  state: string;
}

class CreatePersonService {
  private personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute({ name, age, maritalstatus, cpf, city, state }: IRequest): Promise<Person>{
    const verifyCpf = await this.personRepository.findByCpf(cpf)

    if(verifyCpf) {
      throw new AppError('A person with this CPF is already exists!')
    }

    const person = await this.personRepository.create({
      name,
      age,
      maritalstatus,
      cpf,
      city,
      state
    });

    return person;
  };
}

export default CreatePersonService;
