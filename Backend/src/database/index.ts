import {Connection, createConnection, getConnection, getConnectionOptions} from 'typeorm'


export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()


  console.log(process.env.NODE_ENV)
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' ? "test.softwrap" : defaultOptions.database
    })
  );
}

