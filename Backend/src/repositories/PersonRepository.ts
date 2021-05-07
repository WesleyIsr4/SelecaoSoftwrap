import { getRepository, Repository } from "typeorm";
import ICreatePerson from "../DTOs/ICreatePerson";
import Person from "../models/Person";
import IPersonRepository from "./IPersonRepository";

class PersonRepository implements IPersonRepository {
  private ormRepository: Repository<Person>

  constructor() {
    this.ormRepository = getRepository(Person)
  }
  public async findByCpf(cpf: string): Promise<Person> {
    const person = await this.ormRepository.findOne({
      where: {
        cpf
      }
    })
    return person;
  }
  public async create({
    name,
    age,
    maritalstatus,
    cpf,
    city,
    state
  }: ICreatePerson): Promise<Person> {

    const person = this.ormRepository.create({
    name,
    age,
    maritalstatus,
    cpf,
    city,
    state
    })

    await this.ormRepository.save(person)
    return person;

  }
  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id)
  }

  public async save(person: Person): Promise<Person> {
    return this.ormRepository.save(person)
  }

  public async findByid(id: string): Promise<Person> {
    const person = await this.ormRepository.findOne({
      where: { id }
    })

    return person
  }
  public async findAll(): Promise<Person[]> {
    return this.ormRepository.find();
  }
}

export default PersonRepository;
