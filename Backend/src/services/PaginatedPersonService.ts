import IPaginated from "../interface/Paginated";
import Person from "../models/Person";
import IPersonRepository from "../repositories/IPersonRepository";

interface IRequest {
  page: number;
}

class PaginatedPersonService {
  private personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository){
    this.personRepository = personRepository
  }

  public async execute({page}: IRequest): Promise<IPaginated<Person>> {
    const [persons, total] = await this.personRepository.findallPaginated(
      page * 10,
    )

    const totalPages = Math.ceil(total / 10);

    const response: IPaginated<Person> = {
      data: persons,
      totalElements: total,
      page,
      elements: persons.length,
      elementsPerPage: 10,
      totalPages,
      firstPage: page === 0,
      lastPage: page === totalPages - 1,
    }

    return response;
  }
}
export default PaginatedPersonService
