import React, { useEffect, useState } from 'react';
import { BiTrashAlt, BiEdit } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

import IPerson from '../../interface/CreatePerson';
import api from '../../services/api';

import { Container, Table, Thead, Tbody } from './styles';

const Body: React.FC = () => {
  const [person, setPerson] = useState<IPerson[]>([]);
  const history = useHistory();

  async function loadPerson() {
    api.get<IPerson[]>('/person').then((response) => {
      const personFormatted = response.data.map((person) => {
        return {
          ...person,
        };
      });
      setPerson(personFormatted);
    });
  }

  async function deleteTask(id: string) {
    await api.delete(`person/${id}`);
    loadPerson();
  }

  function editTask(id: string) {
    history.push(`form/${id}`);
  }

  useEffect(() => {
    loadPerson();
  });

  return (
    <>
      <Container>
        <Table>
          <Thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Estado Civil</th>
              <th>CPF</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Opções</th>
            </tr>
          </Thead>
          <Tbody>
            {person.map((persons) => (
              <tr key={persons.id}>
                <td>{persons.name}</td>
                <td>{persons.age} Anos</td>
                <td>{persons.maritalstatus}</td>
                <td>{persons.cpf}</td>
                <td>{persons.city}</td>
                <td>{persons.state}</td>
                <td>
                  <BiTrashAlt
                    size={20}
                    onClick={() => deleteTask(persons.id)}
                  />
                  <BiEdit size={20} onClick={() => editTask(persons.id)} />
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default Body;
