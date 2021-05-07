/**
- Nome
- Idade
- Estado Civil
- CPF
- Cidade
- Estado
 */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')

class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  maritalstatus: string;

  @Column({
    unique: true,
  })
  cpf: string;

  @Column()
  city: string;

  @Column()
  state: string;

}

export default Person;
