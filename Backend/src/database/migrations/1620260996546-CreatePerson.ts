import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePerson1620260996546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'person',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid'
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'age',
              type: 'varchar',
            },
            {
              name: 'maritalstatus',
              type: 'varchar'
            },
            {
              name: 'cpf',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'city',
              type: 'varchar'
            },
            {
              name: 'state',
              type: 'varchar'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('person')
    }

}

/**
- Nome
- Idade
- Estado Civil
- CPF
- Cidade
- Estado
 */
