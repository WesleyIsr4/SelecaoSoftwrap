import AppError from "../Error/AppError";
import IPersonRepository from "../repositories/IPersonRepository";

class DeletePersonService {
  private personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository){
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<void>{
    const person = await this.personRepository.findByid(id)

    if(!person){
      throw new AppError('The person was not found', 400);
    }

    await this.personRepository.delete(id);
  }
}

export default DeletePersonService
