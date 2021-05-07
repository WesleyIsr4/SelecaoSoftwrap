import { FormHandles } from '@unform/core';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useHistory, useParams } from 'react-router-dom';
import { CgArrowLeftR } from 'react-icons/cg';

import { Container, Content, Title } from './styles';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface IParams {
  id: string;
}

interface IRequest {
  id: string;
  name: string;
  age: string;
  maritalstatus: string;
  cpf: string;
  city: string;
  state: string;
}

const Forms: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [model, setModel] = useState<IRequest>({
    id: '',
    name: '',
    age: '',
    maritalstatus: '',
    cpf: '',
    city: '',
    state: '',
  });

  const { id } = useParams<IParams>();

  const handleSubmit = useCallback(
    async (data: IRequest) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          age: Yup.number().required('Idade obrigatório'),
          maritalstatus: Yup.string().required('Estado civil obrigatório'),
          cpf: Yup.string().required('Cpf é obrigatorio'),
          city: Yup.string().required('Estado civil obrigatório'),
          state: Yup.string().required('Estado civil obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (id !== undefined) {
          await api.put(`person/${id}`, data);
        } else {
          await api.post('person', data);
        }

        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [history, id],
  );

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function findTask(id: string) {
    const response = await api.get(`person/${id}`);

    setModel({
      id: response.data.id,
      name: response.data.name,
      age: response.data.age,
      maritalstatus: response.data.maritalstatus,
      cpf: response.data.cpf,
      city: response.data.city,
      state: response.data.state,
    });
  }

  useEffect(() => {
    findTask(id);
  }, [id]);

  function backTask() {
    history.goBack();
  }
  return (
    <Container>
      <Content>
        <Title>
          <p>{model.id !== '' ? 'Editar cadastro' : 'Criar cadastro'}</p>
          <CgArrowLeftR onClick={backTask} size={20} />
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder={model.id !== '' ? model.name : 'Nome completo'}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />
          <Input
            name="age"
            placeholder={model.id !== '' ? model.age : 'Idade'}
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />
          <Input
            type="text"
            name="maritalstatus"
            placeholder={model.id !== '' ? model.maritalstatus : 'Estado Civil'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />
          <Input
            name="cpf"
            placeholder={model.id !== '' ? model.cpf : 'CPF - 000.000.000-00'}
            type="string"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />
          <Input
            name="city"
            placeholder={model.id !== '' ? model.city : 'Cidade'}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />
          <Input
            name="state"
            placeholder={model.id !== '' ? model.state : 'Estado'}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          />

          <Button type="submit">
            {model.id !== '' ? 'Editar cadastro' : 'Criar cadastro'}
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Forms;
