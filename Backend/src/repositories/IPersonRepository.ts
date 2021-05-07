import ICreatePerson from "../DTOs/ICreatePerson";
import Person from "../models/Person";

export default interface IPersonRepository {
create(CreatePerson: ICreatePerson): Promise<Person>
delete(id: string): Promise<void>
save(person: Person): Promise<Person>
findByid(id: string): Promise<Person | undefined>;
findByCpf(cpf: string): Promise<Person | undefined>;
findAll(): Promise<Person[]>
findallPaginated(page: number): Promise<[Person[], number]>
}

// 1 - Inserir conteúdo na tabela
// 2 - Editar o conteúdo da tabela.
// 3 - Remover conteúdo da tabela.
// 4 - Paginar a tabela (Pode ser paginação do pelo front-end).
// 5 - Visualizar de forma clara os dados apresentados.
